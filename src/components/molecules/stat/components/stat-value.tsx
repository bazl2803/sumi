import clsx from "clsx";
import React from "react";
import { StatValueRecipe } from "../stat.recipes";
import { TypographyRecipe } from "@/components/atoms/typography/typography.recipes";

interface StackValueProps extends React.ComponentPropsWithRef<"span"> {}

export const StatValue: React.FC<StackValueProps> = ({
  className,
  ...props
}) => {
  return (
    <span
      className={clsx(
        TypographyRecipe({ role: "title2", emphasized: true }),
        StatValueRecipe,
        className
      )}
      {...props}
    />
  );
};
