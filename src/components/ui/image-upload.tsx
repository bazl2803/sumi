import { LucideUploadCloud } from "lucide-react";
import React, { InputHTMLAttributes } from "react";

interface ImageUploadProps
  extends Omit<
    React.DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "type"
  > {}

export const ImageUpload: React.FC<ImageUploadProps> = (props) => {
  return (
    <div className="">
      <LucideUploadCloud />
      <span className="text-sm">Subir</span>

      <input className="hidden" type="file" {...props} />
    </div>
  );
};
