import clsx from "clsx";
import React from "react";
import { TileRecipe } from "./tile.recipes";
import { Surface } from "@/components";

interface TileProps extends React.ComponentPropsWithRef<"div"> {
  surface?: "solid" | "outline" | "ghost";
}

export const Tile = ({ className, surface, ...props }: TileProps) => {
  return (
    <Surface
      variant={surface}
      className={clsx(TileRecipe, className)}
      {...props}
    />
  );
};
