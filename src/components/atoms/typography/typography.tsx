import React from "react";
import { TypographyRecipe } from "./typography.recipes";
import clsx from "clsx";

interface TypographyProps
  extends Omit<React.ComponentPropsWithRef<"div">, "role"> {
  children?: React.ReactNode;
  role?:
    | "large-title"
    | "title1"
    | "title2"
    | "title3"
    | "headline"
    | "body"
    | "callout"
    | "subheadline"
    | "footnote"
    | "caption1"
    | "caption2";
  emphasized?: boolean;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  className,
  role,
  emphasized,
  ...props
}) => {
  return (
    <div
      className={clsx(className, TypographyRecipe({ role, emphasized }))}
      {...props}
    >
      {children}
    </div>
  );
};
