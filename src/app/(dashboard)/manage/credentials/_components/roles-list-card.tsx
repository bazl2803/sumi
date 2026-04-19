"use client";

import { Group, ListItem, Stack, Typography } from "@/components";
import { Avatar } from "@/components/molecules/avatar/avatar";
import { AvatarGroup } from "@/components/molecules/avatar/components/avatar-group";
import { RoleWithAssignedUsers } from "@/models/role.model";
import { IconKey, IconShield, IconUser } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { sva } from "panda/css";

interface RoleCardProps {
  role: RoleWithAssignedUsers;
  selected?: boolean;
}

const RoleCardStyles = sva({
  slots: ["root", "name", "permissions", "users", "icon"],
  base: {
    root: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gridTemplateRows: "1fr 1fr",
      gridTemplateAreas: `
        "name name"
        "permissions users"
      `,
      padding: "1rem",
      gap: 2,
      border: "1px solid",
      borderColor: {
        base: "neutral.200",
        _osDark: "neutral.800",
      },
      borderRadius: "1.5rem",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
      _hover: {
        borderColor: {
          base: "neutral.300",
          _osDark: "neutral.700",
        },
      },
    },
    name: {
      gridArea: "name",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    permissions: {
      gridArea: "permissions",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    users: {
      gridArea: "users",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    icon: {
      backgroundColor: "neutral.100",
      borderRadius: "full",
      color: "neutral.900",
      padding: 2,
      _osDark: {
        backgroundColor: "neutral.900",
        color: "neutral.100",
      },
    },
  },
});

export function RolesListCard({ role, selected }: RoleCardProps) {
  const classes = RoleCardStyles();
  const router = useRouter();

  return (
    <ListItem
      className={classes.root}
      key={role._id}
      onClick={() => router.push(`/manage/credentials/${role._id}`)}
      selected={selected}
    >
      <div className={classes.name}>
        <div className={classes.icon}>
          <IconShield size={20} />
        </div>
        <Typography variant="headline">{role.name}</Typography>
      </div>

      <div className={classes.permissions}>
        <Stack>
          <Typography variant="caption1">Permisos</Typography>
          <Group>
            <IconKey size={20} />
            <Typography variant="caption2">
              {role.permissions?.length}
            </Typography>
          </Group>
        </Stack>
      </div>

      <div className={classes.users}>
        <Stack>
          <Typography variant="caption1">Usuarios</Typography>
          <Group>
            <IconUser size={20} />
            <AvatarGroup>
              {role.users?.map((user) => (
                <Avatar src={user.image} alt={user.name} />
              ))}
            </AvatarGroup>
          </Group>
        </Stack>
      </div>
    </ListItem>
  );
}
