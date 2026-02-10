import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import React from "react";
import { AvatarRecipe } from "./avatar.recipes";

interface AvatarProps
  extends Omit<ImageProps, "width" | "height" | "alt" | "src"> {
  src?: string;
  fallback?: string;
  size?: "xs" | "sm" | "md" | "lg";
}

export const Avatar: React.FC<AvatarProps> = ({
  className,
  src,
  size,
  fallback,
  ...props
}) => {
  const styles = AvatarRecipe({ size });

  return (
    <div className={clsx(styles.root, className)}>
      {src ? (
        <Image
          className={styles.image}
          src={src}
          alt={src}
          width={100}
          height={100}
          {...props}
        />
      ) : (
        <span className={styles.fallback}>{fallback}</span>
      )}
    </div>
  );
};
