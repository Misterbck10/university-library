import dummyBooks from "../dummyBooks.json";
import ImageKit from "imagekit";
import { drizzle } from "drizzle-orm/neon-http";
import { books } from "@/database/schema";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
});
const uploadToImagekit = async (
  url: string,
  fileName: string,
  folder: string,
) => {
  try {
    const response = await imagekit.upload({
      file: url,
      fileName,
      folder,
    });
    return response.filePath;
  } catch (error) {
    console.error("Error uploading to ImageKit:", error);
  }
};

const seed = async () => {
  console.log("Seeding database...");

  try {
    for (const book of dummyBooks) {
      const coverUrl = (await uploadToImagekit(
        book.coverUrl,
        `${book.title}.jpg`,
        "books/covers",
      )) as string;

      const videoUrl = (await uploadToImagekit(
        book.videoUrl,
        `${book.title}.mp4`,
        "books/videos",
      )) as string;

      if (!coverUrl || !videoUrl) {
        console.error(`Failed to upload assets for ${book.title}`);
        continue;
      }

      await db.insert(books).values({
        ...book,
        coverUrl,
        videoUrl,
      });
    }

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seed();
