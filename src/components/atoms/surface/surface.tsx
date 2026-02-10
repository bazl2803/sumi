import clsx from "clsx";
import { SurfaceRecipe } from "./surface.recipes";

interface SurfaceProps extends React.ComponentPropsWithRef<"div"> {
  variant?: "solid" | "outline" | "ghost";
}

export const Surface: React.FC<SurfaceProps> = ({
  className,
  variant,
  ...props
}) => {
  return (
    <div className={clsx(SurfaceRecipe({ variant }), className)} {...props} />
  );
};
