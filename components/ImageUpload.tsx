"use client";

import { Image as IKImage, ImageKitProvider, upload } from "@imagekit/next";
import config from "@/lib/config";
import { useRef, useState } from "react";
<<<<<<< HEAD
import Image from "next/image";
import { FilePath } from "tailwindcss/types/config";
import { toast } from "sonner";
import { type } from "node:os";
=======
<<<<<<< HEAD
import { toast } from "sonner";
=======
import Image from "next/image";
import { FilePath } from "tailwindcss/types/config";
import { toast } from "sonner";
import { type } from "node:os";
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
>>>>>>> cce12f6 (fixed the ESLint warnings and change the Image tag to normal image html tag)

const {
  env: {
    imagekit: { publicKey, urlEndpoint },
  },
} = config;

const authenticator = async () => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  let response: Response;

>>>>>>> cce12f6 (fixed the ESLint warnings and change the Image tag to normal image html tag)
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`,
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;

    return { signature, expire, token };
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
<<<<<<< HEAD
=======

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Request failed with status ${response.status}: ${errorText}`,
    );
  }

  const data = await response.json();
  const { signature, expire, token } = data;

  return { signature, expire, token };
=======
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`,
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;

    return { signature, expire, token };
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
>>>>>>> cce12f6 (fixed the ESLint warnings and change the Image tag to normal image html tag)
};

const ImageUpload = ({
  onFileChange,
}: {
  onFileChange: (FilePath: string) => void;
}) => {
<<<<<<< HEAD
  // ALTERADO: agora o ref aponta para um input file normal
=======
<<<<<<< HEAD
=======
  // ALTERADO: agora o ref aponta para um input file normal
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
>>>>>>> cce12f6 (fixed the ESLint warnings and change the Image tag to normal image html tag)
  const ikUploadRef = useRef<HTMLInputElement | null>(null);

  const [file, setFile] = useState<{ filePath: string } | null>(null);

  const onError = (error: any) => {
    console.log(error);

    toast.error("Image uploaded failed", {
      description: "Your image could not be uploaded. Please try again.",
    });
  };

  const onSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.filePath);

    toast.success("Image uploaded successfully", {
      description: `${res.filePath} uploaded successfully`,
    });
  };

<<<<<<< HEAD
  // ADICIONADO: substitui o onSuccess/onError do IKUpload
=======
<<<<<<< HEAD
=======
  // ADICIONADO: substitui o onSuccess/onError do IKUpload
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
>>>>>>> cce12f6 (fixed the ESLint warnings and change the Image tag to normal image html tag)
  const handleUpload = async () => {
    try {
      const selectedFile = ikUploadRef.current?.files?.[0];

      if (!selectedFile) return;

      const { signature, expire, token } = await authenticator();

<<<<<<< HEAD
      // ADICIONADO: upload via SDK novo
=======
<<<<<<< HEAD
=======
      // ADICIONADO: upload via SDK novo
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
>>>>>>> cce12f6 (fixed the ESLint warnings and change the Image tag to normal image html tag)
      const res = await upload({
        file: selectedFile,
        fileName: "test-upload.png",
        publicKey,
        signature,
        expire,
        token,
      });

      onSuccess(res);
    } catch (error) {
      onError(error);
    }
  };

  return (
    <ImageKitProvider urlEndpoint={urlEndpoint}>
<<<<<<< HEAD
      {/* ALTERADO: IKUpload removido e trocado por input file escondido */}
=======
<<<<<<< HEAD
=======
      {/* ALTERADO: IKUpload removido e trocado por input file escondido */}
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
>>>>>>> cce12f6 (fixed the ESLint warnings and change the Image tag to normal image html tag)
      <input
        ref={ikUploadRef}
        type="file"
        className="hidden"
        onChange={handleUpload}
      />

      <button
        type="button"
        className="upload-btn"
        onClick={(e) => {
          e.preventDefault();
          ikUploadRef.current?.click();
        }}
      >
<<<<<<< HEAD
        <Image
          src="/icons/upload.svg"
          alt="upload-icon"
          width={20}
          height={20}
          className="object-contain"
=======
<<<<<<< HEAD
        <img
          src="/icons/upload.svg"
          alt="upload-icon"
          className="h-5 w-5 object-contain"
=======
        <Image
          src="/icons/upload.svg"
          alt="upload-icon"
          width={20}
          height={20}
          className="object-contain"
>>>>>>> 9bf917f (The initial settings of the Project, until now we did the set-up, creation of the files, sign-in & sign-up design done, we have also the integration of Imagekit on the Project)
>>>>>>> cce12f6 (fixed the ESLint warnings and change the Image tag to normal image html tag)
        />
        <p className="text-base text-light-100">Upload a File</p>

        {file && <p className="upload-filename">{file.filePath}</p>}
      </button>

      {file && (
        <IKImage
          alt={file.filePath}
          src={file.filePath}
          width={500}
          height={500}
        />
      )}
    </ImageKitProvider>
  );
};

export default ImageUpload;
