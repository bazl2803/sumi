"use client";

import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface NavbarContext {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const NavbarContext = React.createContext<NavbarContext | undefined>(undefined);

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  children:
    | React.ReactElement<typeof NavbarItem>
    | React.ReactElement<typeof NavbarItem>[];
  defaultValue: string;
}

export const Navbar = ({ children, className, defaultValue }: NavbarProps) => {
  const [selected, setSelected] = React.useState<string>(defaultValue);

  return (
    <nav
      role="tablist"
      className={`w-auto overflow-x-auto rounded-full bg-white/70 p-1 outline outline-neutral-200 supports-[backdrop-filter]:backdrop-blur-md ${className}`}
    >
      <ul className="grid-auto-fr grid w-full grid-flow-col grid-rows-1 gap-1 overflow-x-auto">
        <NavbarContext.Provider value={{ selected, setSelected }}>
          {children}
        </NavbarContext.Provider>
      </ul>
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
  const context = React.use(NavbarContext);
  if (!context) throw new Error("NavItem must be used within a Navbar");

  return (
    <li
      role="tab"
      aria-selected={value === context.selected ? "true" : "false"}
      className={clsx(
        "hover-supported:hover:bg-neutral-100/50 flex h-15 min-w-15 cursor-pointer flex-col items-center justify-center gap-0.5 overflow-hidden rounded-full px-4 py-2 transition-colors duration-150 outline-none",
        value === context.selected && "bg-black/10",
        className,
      )}
      //className=

      {...props}
    >
      <Link href={href}>
        <button
          className="line-clamp-1 flex flex-col items-center justify-center gap-0.5 overflow-hidden text-ellipsis"
          onClick={() => {
            context.setSelected(value);
          }}
        >
          <div className="">{icon}</div>
          <label className="text-xs font-medium">{label}</label>
        </button>
      </Link>
    </li>
  );
};
