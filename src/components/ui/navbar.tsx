"use client";

import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  children:
    | React.ReactElement<typeof NavbarItem>
    | React.ReactElement<typeof NavbarItem>[];
  defaultValue: string;
}

export const Navbar = ({ children, className, defaultValue }: NavbarProps) => {
  return (
    <nav
      role="tablist"
      className={`overflow-x-auto rounded-full bg-white/70 outline outline-neutral-200 supports-[backdrop-filter]:backdrop-blur-md ${className}`}
    >
      <ul className="flex flex-row gap-1 overflow-x-auto p-1">{children}</ul>
    </nav>
  );
};

interface NavbarItemProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  icon: React.ReactNode;
  label: string;
  selected?: boolean;
  value: string;
  href: string;
}

export const NavbarItem = ({
  icon,
  label,
  selected,
  value,
  className,
  href,
  ...props
}: NavbarItemProps) => {
  const path = usePathname();
  const isSelected = href === path;

  return (
    <li
      role="tab"
      aria-selected={isSelected ? "true" : "false"}
      className={clsx(
        "flex h-15 min-w-15 grow cursor-pointer flex-col items-center justify-center gap-0.5 overflow-hidden rounded-full p-4 transition-colors duration-150 outline-none supports-[hover]:hover:bg-neutral-100/50",
        isSelected && "bg-black/10",
        className,
      )}
      {...props}
    >
      <Link
        className="flex w-full flex-col items-center justify-center gap-0.5 text-ellipsis"
        href={href}
      >
        {icon}
        <label className="hidden w-full overflow-hidden text-center text-xs font-medium text-ellipsis sm:block">
          {label}
        </label>
      </Link>
    </li>
  );
};
