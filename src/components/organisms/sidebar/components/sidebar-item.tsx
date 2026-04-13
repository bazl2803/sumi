"use client";
import React from "react";
import clsx from "clsx";
import { SidebarItemRecipe } from "../sidebar.recipes";
import { usePathname, useRouter } from "next/navigation";
import { Icon as TablerIcon } from "@tabler/icons-react";

interface SidebarItemProps extends React.ComponentPropsWithRef<"li"> {
  icon?: TablerIcon;
  label: string;
  href: string;
  selected?: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  className,
  icon: Icon,
  href,
  ...props
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const styles = SidebarItemRecipe({
    selected: pathname.startsWith(href),
  });

  const navigateTo = () => {
    router.push(href);
  };

  return (
    <li
      className={clsx(styles.root, className)}
      onClick={navigateTo}
      {...props}
    >
      <div className={styles.wrapper}>
        {Icon && <Icon size={20} />}
        <div className={styles.label}>{props.label}</div>
      </div>
    </li>
  );
};
