import clsx from "clsx";
import { StackRecipe } from "./stack.recipes";

interface StackProps extends React.ComponentPropsWithRef<"div"> {}

export const Stack: React.FC<StackProps> = ({ className, ...props }) => {
  return <div className={clsx(StackRecipe, className)} {...props} />;
};
