import Image, { ImageProps } from "next/image";
import { SidebarHeaderRecipe } from "../sidebar.recipes";
import clsx from "clsx";
import { SidebarTrigger } from "./sidebar-trigger";

interface SidebarHeaderProps {
  children: React.ReactNode;
}

const SidebarHeaderComponent = ({ children }: SidebarHeaderProps) => {
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

interface SidebarHeaderWithCompound extends React.FC<SidebarHeaderProps> {
  Logo: typeof SidebarHeaderLogo
}

const SidebarHeader = SidebarHeaderComponent as SidebarHeaderWithCompound
SidebarHeader.Logo = SidebarHeaderLogo;

export { SidebarHeader, SidebarHeaderLogo }
