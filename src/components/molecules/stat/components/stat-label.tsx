import clsx from "clsx";
import React from "react";
import { StatLabelRecipe } from "../stat.recipes";

interface StackLabelProps extends React.ComponentPropsWithRef<"span"> {}

export const StatLabel: React.FC<StackLabelProps> = ({
  className,
  ...props
}) => {
  return <span className={clsx(StatLabelRecipe, className)} {...props} />;
};
