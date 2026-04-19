"use client";

import { List } from "@/components";
import { RoleWithAssignedUsers } from "@/models/role.model";
import { sva } from "panda/css";
import { RolesListCard } from "./roles-list-card";
import { useParams } from "next/navigation";

// --- Props ------------------------------------------------------------------
interface RolesListProps {
  roles: RoleWithAssignedUsers[];
}

// --- Styles -----------------------------------------------------------------
const RolesListStyles = sva({
  slots: ["list", "listItem"],
  base: {
    list: {
      paddingInline: 4,
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
  const { id } = useParams();

  console.log(id);

  if (!roles) {
    return <p>No se encontraron roles</p>;
  }

  return (
    <List className={classes.list}>
      {roles.map((role) => (
        <RolesListCard key={role._id} role={role} selected={role._id === id} />
      ))}
    </List>
  );
}
