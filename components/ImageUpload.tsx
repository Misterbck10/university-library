"use client";

import { Image as IKImage, ImageKitProvider, upload } from "@imagekit/next";
import config from "@/lib/config";
import { useRef, useState } from "react";
import Image from "next/image";
import { FilePath } from "tailwindcss/types/config";
import { toast } from "sonner";
import { type } from "node:os";

const {
  env: {
    imagekit: { publicKey, urlEndpoint },
  },
} = config;

const authenticator = async () => {
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
};

const ImageUpload = ({
  onFileChange,
}: {
  onFileChange: (FilePath: string) => void;
}) => {
  // ALTERADO: agora o ref aponta para um input file normal
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

  // ADICIONADO: substitui o onSuccess/onError do IKUpload
  const handleUpload = async () => {
    try {
      const selectedFile = ikUploadRef.current?.files?.[0];

      if (!selectedFile) return;

      const { signature, expire, token } = await authenticator();

      // ADICIONADO: upload via SDK novo
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
      {/* ALTERADO: IKUpload removido e trocado por input file escondido */}
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
        <Image
          src="/icons/upload.svg"
          alt="upload-icon"
          width={20}
          height={20}
          className="object-contain"
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
