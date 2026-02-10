import clsx from "clsx";
import { StatRecipe } from "./stat.recipes";

interface StatProps extends React.ComponentPropsWithRef<"div"> {}

export const Stat: React.FC<StatProps> = ({ className, ...props }) => {
  return (
    <div>
      <div className={clsx(StatRecipe, className)} {...props} />
    </div>
  );
};
