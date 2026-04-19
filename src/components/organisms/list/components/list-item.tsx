"use client";

import { ListItemRecipe } from "../list.recipe";
import { cx } from "panda/css";

interface ListItemProps extends React.ComponentPropsWithRef<"li"> {
  selected?: boolean;
}

export const ListItem = ({ className, selected, ...props }: ListItemProps) => {
  return (
    <li
      className={cx("list-item", ListItemRecipe({ selected }), className)}
      {...props}
    />
  );
};
