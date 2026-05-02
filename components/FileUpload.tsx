"use client";

import {
  Image as IKImage,
  Video as IKVideo,
  ImageKitProvider,
  upload,
} from "@imagekit/next";
import config from "@/lib/config";
import React, { useRef, useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const {
  env: {
    imagekit: { publicKey, urlEndpoint },
  },
} = config;

const authenticator = async () => {
  const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Request failed with status ${response.status}: ${errorText}`,
    );
  }

  const data = await response.json();
  const { signature, expire, token, publicKey: returnedPublicKey } = data;

  return {
    token,
    expire,
    signature,
    publicKey: returnedPublicKey ?? publicKey,
  };
};

interface Props {
  type: "image" | "video";
  accept: string;
  placeholder: string;
  folder: string;
  variant: "dark" | "light";
  onFileChange: (filePath: string) => void;
  value?: string;
}

interface UploadedFileState {
  filePath: string | null;
}

const FileUpload = ({
  type,
  accept,
  placeholder,
  folder,
  variant,
  onFileChange,
  value,
}: Props) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<UploadedFileState>({
    filePath: value ?? null,
  });
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const styles = {
    button:
      variant === "dark"
        ? "bg-dark-300"
        : "bg-light-600 border-gray-100 border",
    placeholder: variant === "dark" ? "text-light-100" : "text-slate-500",
    text: variant === "dark" ? "text-light-100" : "text-dark-400",
  };

  const onError = (error: unknown) => {
    console.error(error);

    setIsUploading(false);
    setProgress(0);

    toast.error(`${type} upload failed`, {
      description: `Your ${type} could not be uploaded. Please try again.`,
    });
  };

  const onSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.filePath);
    setIsUploading(false);
    toast.success(`${type} uploaded successfully`, {
      description: `${res.filePath} uploaded successfully`,
    });
  };

  const onValidate = (file: File) => {
    if (type === "image" && file.size > 20 * 1024 * 1024) {
      toast.error("File size too large", {
        description: "Please upload a file that is less than 20MB in size.",
      });
      return false;
    }

    if (type === "video" && file.size > 50 * 1024 * 1024) {
      toast.error("File size too large", {
        description: "Please upload a file that is less than 50MB in size.",
      });
      return false;
    }

    return true;
  };

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    const isValid = onValidate(selectedFile);
    if (!isValid) {
      event.target.value = "";
      return;
    }

    try {
      setProgress(0);
      setIsUploading(true);

      const { token, expire, signature, publicKey } = await authenticator();

      const res = await upload({
        file: selectedFile,
        fileName: selectedFile.name,
        folder,
        useUniqueFileName: true,
        token,
        expire,
        signature,
        publicKey,
        onProgress: ({ loaded, total }) => {
          const percent = Math.round((loaded / total) * 100);
          setProgress(percent);
        },
      });

      onSuccess(res);
    } catch (error) {
      onError(error);
    } finally {
      event.target.value = "";
    }
  };

  return (
    <ImageKitProvider urlEndpoint={urlEndpoint}>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={handleFileSelect}
      />

      <button
        type="button"
        className={cn("upload-btn", styles.button)}
        disabled={isUploading}
        onClick={(e) => {
          e.preventDefault();
          fileInputRef.current?.click();
        }}
      >
        <img
          src="/icons/upload.svg"
          alt="upload-icon"
          width={20}
          height={20}
          className="object-contain"
          loading="eager"
        />

        <p className={cn("text-base", styles.placeholder)}>{placeholder}</p>

        {file.filePath && (
          <p className={cn("upload-filename", styles.text)}>{file.filePath}</p>
        )}
      </button>

      {progress > 0 && progress !== 100 && (
        <div className="w-full rounded-full bg-green-200">
          <div className="progress" style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
      )}

      {file.filePath &&
        (type === "image" ? (
          <IKImage
            alt={file.filePath}
            src={file.filePath}
            width={500}
            height={300}
            loading="eager"
          />
        ) : (
          <IKVideo
            src={file.filePath}
            controls={true}
            className="h-96 w-full rounded-xl"
          />
        ))}
    </ImageKitProvider>
  );
};

export default FileUpload;
