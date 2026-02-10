import clsx from "clsx";
import { CardRecipe } from "./card.recipes";

interface CardProps extends React.ComponentPropsWithRef<"div"> {}

export const Card: React.FC<CardProps> = ({ className, ...props }) => {
  return <div className={clsx(CardRecipe(), className)} {...props} />;
};
