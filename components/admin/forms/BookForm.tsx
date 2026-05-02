"use client";

import { z } from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { bookSchema } from "@/lib/validations";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import FileUpload from "@/components/FileUpload";
import { createBook } from "@/lib/admin/actions/book";
import { zodResolver } from "@hookform/resolvers/zod";
import ColorPicker from "@/components/admin/ColorPicker";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const BookForm = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: "",
      description: "",
      author: "",
      genre: "",
      rating: 1,
      totalCopies: 1,
      coverUrl: "",
      coverColor: "",
      videoUrl: "",
      summary: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof bookSchema>) => {
    const result = await createBook(values);

    if (result.success) {
      toast.success("Success", {
        description: "Book created successfully",
      });

      router.push(`/admin/books/${result.data.id}`);
    } else {
      toast.error("Error", {
        description:
          result.message || "An error occurred while creating the book",
      });
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name={"title"}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel
                className="text-base font-normal text-dark-500"
                htmlFor={field.name}
              >
                Book Title
              </FormLabel>
              <FormControl>
                <Input
                  id={field.name}
                  required
                  placeholder="Book title"
                  {...field}
                  className="book-form_input"
                  aria-label={field.name}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"author"}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel
                className="text-base font-normal text-dark-500"
                htmlFor={field.name}
              >
                Author
              </FormLabel>
              <FormControl>
                <Input
                  id={field.name}
                  required
                  placeholder="Book author"
                  {...field}
                  className="book-form_input"
                  aria-label={field.name}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"genre"}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel
                className="text-base font-normal text-dark-500"
                htmlFor={field.name}
              >
                Genre
              </FormLabel>
              <FormControl>
                <Input
                  id={field.name}
                  required
                  placeholder="Book genre"
                  {...field}
                  className="book-form_input"
                  aria-label={field.name}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={"rating"}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel
                className="text-base font-normal text-dark-500"
                htmlFor={field.name}
              >
                Rating
              </FormLabel>
              <FormControl>
                <Input
                  id={field.name}
                  type="number"
                  min={1}
                  max={5}
                  placeholder="Book rating (1-5)"
                  {...field}
                  value={field.value as number}
                  className="book-form_input"
                  aria-label={field.name}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={"totalCopies"}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel
                className="text-base font-normal text-dark-500"
                htmlFor={field.name}
              >
                Total Copies
              </FormLabel>
              <FormControl>
                <Input
                  id={field.name}
                  type="number"
                  min={1}
                  max={10000}
                  placeholder="Total copies available"
                  {...field}
                  value={field.value as number}
                  className="book-form_input"
                  aria-label={field.name}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"coverUrl"}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormControl>
                <FileUpload
                  type="image"
                  accept="image/*"
                  placeholder="Upload a book cover"
                  folder="books/covers"
                  variant="light"
                  onFileChange={field.onChange}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={"coverColor"}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormControl>
                <ColorPicker
                  id={field.name}
                  onPickerChange={field.onChange}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={"description"}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel
                className="text-base font-normal text-dark-500"
                htmlFor={field.name}
              >
                Book Description
              </FormLabel>
              <FormControl>
                <Textarea
                  id={field.name}
                  placeholder="Book description"
                  {...field}
                  rows={10}
                  className="book-form_input"
                  aria-label={field.name}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={"videoUrl"}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormControl>
                <FileUpload
                  type="video"
                  accept="video/*"
                  placeholder="Upload a book triler"
                  folder="books/videos"
                  variant="light"
                  onFileChange={field.onChange}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={"summary"}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel
                className="text-base font-normal text-dark-500"
                htmlFor={field.name}
              >
                Book Summary
              </FormLabel>
              <FormControl>
                <Textarea
                  id={field.name}
                  placeholder="Book summary"
                  {...field}
                  rows={5}
                  className="book-form_input"
                  aria-label={field.name}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="book-form_btn text-white">
          Add Book to Library
        </Button>
      </form>
    </Form>
  );
};
export default BookForm;
