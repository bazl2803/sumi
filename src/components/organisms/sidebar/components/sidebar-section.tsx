import React from "react";
import clsx from "clsx";
import { SidebarSectionRecipe } from "../sidebar.recipes";

interface SidebarSectionProps extends React.ComponentPropsWithRef<"ul"> {
  grow?: boolean;
  title?: string;
}

export const SidebarSection: React.FC<SidebarSectionProps> = ({
  className,
  grow,
  title,
  ...props
}) => {
  const styles = SidebarSectionRecipe({ grow });

  return (
    <div className={clsx(styles.root, className)}>
      <span className={styles.title}>{title}</span>
      <ul className={styles.list} {...props} />
    </div>
  );
};
