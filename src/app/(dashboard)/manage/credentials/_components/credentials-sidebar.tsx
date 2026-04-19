"use client";

import { RolesList } from "./roles-list";
import { cva } from "panda/css";
import { CredentialsAppbar } from "./credentials-appbar";
import { useParams } from "next/navigation";
import { RoleWithAssignedUsers } from "@/models/role.model";

export const CredentialsSidebarStyles = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    paddingBlock: 4,
    borderRightColor: { base: "neutral.200", _osDark: "neutral.800" },
    borderRight: "1px solid",
  },
  variants: {
    hide: {
      true: { base: { display: "none" }, md: { display: "flex" } },
    },
  },
});

export function CredentialsSidebar({
  roles,
}: {
  roles?: RoleWithAssignedUsers[];
}) {
  const roleId = useParams();

  return (
    <div className={CredentialsSidebarStyles({ hide: !!roleId.id })}>
      <CredentialsAppbar />
      <RolesList roles={roles ?? []} />
    </div>
  );
}
