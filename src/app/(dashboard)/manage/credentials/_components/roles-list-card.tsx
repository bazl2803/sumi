"use client";

import { Group, ListItem, Stack, Typography } from "@/components";
import { RoleWithStats } from "@/features/roles/types/role";
import { IconKey, IconUser } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { sva } from "panda/css";

interface RoleCardProps {
  role: RoleWithStats;
}

const RoleCardStyles = sva({
  slots: ["root", "name", "permissions", "users"],
  base: {
    root: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gridTemplateRows: "1fr 1fr",
      gridTemplateAreas: `
        "name name"
        "permissions users"
      `,
    },
    name: {
      gridArea: "name",
    },
    permissions: {
      gridArea: "permissions",
    },
    users: {
      gridArea: "users",
    },
  },
});

export function RolesListCard({ role }: RoleCardProps) {
  const classes = RoleCardStyles();
  const router = useRouter();

  return (
    <ListItem
      className={classes.root}
      key={role._id}
      onClick={() => router.push(`/manage/credentials/${role._id}`)}
    >
      <div className={classes.name}>
        <Typography variant="title3" emphasized>
          {role.name}
        </Typography>
      </div>
      <div className={classes.permissions}>
        <Stack>
          <Typography variant="caption1">Permisos</Typography>
          <Group>
            <IconKey size={20} />
            {role.permissionsCount}
          </Group>
        </Stack>
      </div>
      <div className={classes.users}>
        <Stack>
          <Typography variant="caption1">Usuarios</Typography>
          <Group>
            <IconUser size={20} />
            {role.userAssignedCount}
          </Group>
        </Stack>
      </div>
    </ListItem>
  );
}
