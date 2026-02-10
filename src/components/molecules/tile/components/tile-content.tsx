import clsx from "clsx";
import React from "react";
import { TileContentRecipe } from "../tile.recipes";

interface TileContentProps extends React.ComponentPropsWithRef<"div"> {}

export const TileContent: React.FC<TileContentProps> = ({
  className,
  ...props
}) => {
  return <div className={clsx(TileContentRecipe, className)} {...props} />;
};
