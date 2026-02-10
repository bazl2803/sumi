import clsx from "clsx";
import React from "react";
import { TileHeaderRecipe } from "../tile.recipes";

interface TileHeaderProps extends React.ComponentPropsWithRef<"div"> {}

export const TileHeader: React.FC<TileHeaderProps> = ({
  className,
  ...props
}) => {
  return <div className={clsx(TileHeaderRecipe, className)} {...props} />;
};
