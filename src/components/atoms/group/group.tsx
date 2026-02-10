import clsx from "clsx";
import { GroupRecipe } from "./group.recipe";

interface GroupProps extends React.ComponentPropsWithRef<"div"> {}

export const Group: React.FC<GroupProps> = ({ className, ...props }) => {
  return <div className={clsx(GroupRecipe, className)} {...props} />;
};
