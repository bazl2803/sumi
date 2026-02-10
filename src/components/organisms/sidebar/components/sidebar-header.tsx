import Image, { ImageProps } from "next/image";
import { SidebarHeaderRecipe } from "../sidebar.recipes";
import clsx from "clsx";
import { SidebarTrigger } from "./sidebar-trigger";

interface SidebarHeaderProps {
  children: React.ReactNode;
}

export const SidebarHeader = ({ children }: SidebarHeaderProps) => {
  return (
    <div className={SidebarHeaderRecipe().root}>
      {children}
      <SidebarTrigger />
    </div>
  );
};

const SidebarHeaderLogo = ({ className, ...props }: ImageProps) => {
  return (
    <Image
      className={clsx(SidebarHeaderRecipe().logo, className)}
      {...props}
      alt="Logo"
    />
  );
};

SidebarHeader.Logo = SidebarHeaderLogo;
