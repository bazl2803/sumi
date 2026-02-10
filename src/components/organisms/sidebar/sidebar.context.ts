"use client";
import React from "react";

interface SidebarContextValue {
  selected: string;
  setSelected: (selected: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const SidebarContext = React.createContext<
  SidebarContextValue | undefined
>(undefined);

export const useSidebar = () => {
  return (React.use(SidebarContext) ??
    new Error(
      "useSidebar must be used within a SidebarProvider"
    )) as SidebarContextValue;
};
