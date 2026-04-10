"use client";

import { Group, List, ListItem, Stack, Typography } from "@/components";
import { RoleWithStats } from "@/features/roles/types/role";
import { IconKey, IconUser } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { css, sva } from "panda/css";

// --- Props ------------------------------------------------------------------
interface RolesListProps {
  roles: RoleWithStats[];
}

// --- Styles -----------------------------------------------------------------
const RolesListStyles = sva({
  slots: ["list", "listItem"],
  base: {
    list: {
      md: {
        borderRight: "1px solid",
        borderColor: { base: "neutral.200", _dark: "neutral.800" },
      },
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
export const RolesList = ({ roles }: RolesListProps) => {
  const classes = RolesListStyles();
  const router = useRouter();

  if (!roles) {
    return <p>No se encontraron roles</p>;
  }

  return (
    <List className={classes.list}>
      {roles.map((role) => (
        <ListItem
          className={classes.listItem}
          key={role._id}
          onClick={() => router.push(`/manage/credentials/${role._id}`)}
        >
          <div className={css({ gridArea: "name" })}>
            <Typography variant="title2" emphasized>
              {role.name}
            </Typography>
          </div>
          <div className={css({ gridArea: "permissions" })}>
            <Stack>
              <Typography variant="caption1">Permisos</Typography>
              <Group>
                <IconKey size={20} />
                {role.permissionsCount}
              </Group>
            </Stack>
          </div>
          <div className={css({ gridArea: "users" })}>
            <Stack>
              <Typography variant="caption1">Usuarios</Typography>
              <Group>
                <IconUser size={20} />
                {role.userAssignedCount}
              </Group>
            </Stack>
          </div>
        </ListItem>
      ))}
    </List>
  );
};
