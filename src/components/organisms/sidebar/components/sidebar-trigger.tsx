"use client";

import { useSidebar } from "../sidebar.context";
import { SidebarTriggerRecipe } from "../sidebar.recipes";
import { IconLayoutSidebarLeftCollapseFilled } from "@tabler/icons-react";

export const SidebarTrigger: React.FC = () => {
  const { isOpen, setIsOpen } = useSidebar();
  return (
    <button className={SidebarTriggerRecipe} onClick={() => setIsOpen(!isOpen)}>
      <IconLayoutSidebarLeftCollapseFilled />
    </button>
  );
};
