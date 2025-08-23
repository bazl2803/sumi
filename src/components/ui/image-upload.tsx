"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { X, Upload, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  value?: File[];
  onChange: (files: File[]) => void;
  maxFiles?: number;
  maxSize?: number;
  accept?: Record<string, string[]>;
  disabled?: boolean;
  className?: string;
}

export function ImageUpload({
  value = [],
  onChange,
  maxFiles = 5,
  maxSize = 5 * 1024 * 1024, // 5MB
  accept = {
    "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"],
  },
  disabled = false,
  className,
}: ImageUploadProps) {
  const [previews, setPreviews] = useState<string[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = [...value, ...acceptedFiles].slice(0, maxFiles);
      onChange(newFiles);

      // Generate previews for new files
      const newPreviews = [...previews];
      acceptedFiles.forEach((file, index) => {
        if (newPreviews.length + index < maxFiles) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const result = e.target?.result as string;
            setPreviews((prev) => [...prev, result].slice(0, maxFiles));
          };
          reader.readAsDataURL(file);
        }
      });
    },
    [value, onChange, maxFiles, previews],
  );

  const removeFile = (index: number) => {
    const newFiles = value.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);
    onChange(newFiles);
    setPreviews(newPreviews);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxSize,
    maxFiles: maxFiles - value.length,
    disabled: disabled || value.length >= maxFiles,
    multiple: maxFiles > 1,
  });

  return (
    <div className={cn("space-y-4", className)}>
      {/* Upload Area */}
      <div
        {...getRootProps()}
        className={cn(
          "cursor-pointer rounded-lg border-2 border-dashed p-6 text-center transition-colors",
          isDragActive
            ? "border-primary bg-primary/5"
            : "border-muted-foreground/25 hover:border-muted-foreground/50",
          disabled && "cursor-not-allowed opacity-50",
          value.length >= maxFiles && "cursor-not-allowed opacity-50",
        )}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-2">
          <Upload className="text-muted-foreground h-8 w-8" />
          <div className="text-sm">
            {isDragActive ? (
              <p>Suelta las imágenes aquí...</p>
            ) : (
              <div>
                <p className="font-medium">
                  Arrastra y suelta imágenes aquí, o haz clic para seleccionar
                </p>
                <p className="text-muted-foreground mt-1">
                  Máximo {maxFiles} archivos, hasta{" "}
                  {Math.round(maxSize / 1024 / 1024)}MB cada uno
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Preview Grid */}
      {value.length > 0 && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {value.map((file, index) => (
            <div key={index} className="group relative">
              <div className="bg-muted aspect-square overflow-hidden rounded-lg border">
                {previews[index] ? (
                  <img
                    src={previews[index] || "/placeholder.svg"}
                    alt={`Preview ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <ImageIcon className="text-muted-foreground h-8 w-8" />
                  </div>
                )}
              </div>

              {/* Remove Button */}
              <Button
                type="button"
                variant="destructive"
                size="icon"
                className="absolute -top-2 -right-2 h-6 w-6 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                onClick={() => removeFile(index)}
                disabled={disabled}
              >
                <X className="h-3 w-3" />
              </Button>

              {/* File Info */}
              <div className="text-muted-foreground mt-1 truncate text-xs">
                {file.name}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* File Count */}
      {value.length > 0 && (
        <p className="text-muted-foreground text-sm">
          {value.length} de {maxFiles} archivos seleccionados
        </p>
      )}
    </div>
  );
}
