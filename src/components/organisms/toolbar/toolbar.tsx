import clsx from "clsx";
import { ToolbarRecipe } from "./toolbar.recipes";

interface ToolbarProps extends React.ComponentPropsWithRef<'div'> {
}

export const Toolbar: React.FC<ToolbarProps> = ({ className, ...props }) => {
  return <div className={clsx(ToolbarRecipe, className)} {...props} />;
};
