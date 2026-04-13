"use client";

import { List } from "@/components";
import { RoleWithStats } from "@/features/roles/types/role";
import { sva } from "panda/css";
import { RolesListCard } from "./roles-list-card";

// --- Props ------------------------------------------------------------------
interface RolesListProps {
  roles: RoleWithStats[];
}

// --- Styles -----------------------------------------------------------------
const RolesListStyles = sva({
  slots: ["list", "listItem"],
  base: {
    list: {
      paddingInline: 8,
    },
    listItem: {
      userSelect: "none",
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gridTemplateRows: "1fr 1fr",
      gridTemplateAreas: `
        "name name"
        "permissions users"
      `,
      cursor: "pointer",
    },
  },
});

// --- JSX --------------------------------------------------------------------
export function RolesList({ roles }: RolesListProps) {
  const classes = RolesListStyles();

  if (!roles) {
    return <p>No se encontraron roles</p>;
  }

  return (
    <List className={classes.list}>
      {roles.map((role) => (
        <RolesListCard key={role._id} role={role} />
      ))}
    </List>
  );
}
