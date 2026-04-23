"use client";

import { Group, Stack, Typography } from "@/components";
import { Avatar } from "@/components/molecules/avatar/avatar";
import { AvatarGroup } from "@/components/molecules/avatar/components/avatar-group";
import { RoleWithAssignedUsers } from "@/models/role.model";
import { IconKey, IconShield, IconUser } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { css, sva } from "panda/css";

interface RoleCardProps {
  role: RoleWithAssignedUsers;
  selected?: boolean;
}

const RoleCardStyles = sva({
  slots: ["root", "name", "permissions", "users", "icon"],
  base: {
    root: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      gridTemplateAreas: `
        "name name"
        "permissions users"
      `,
      padding: "1rem",
      rowGap: 4,
      columnGap: 2,
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
      backgroundColor: "neutral.200",
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
    <li
      className={classes.root}
      key={role._id}
      onClick={() => router.push(`/manage/credentials/${role._id}`)}
    >
      <div className={classes.name}>
        <div className={classes.icon}>
          <IconShield size={20} />
        </div>
        <Typography variant="title3" emphasized>
          {role.name}
        </Typography>
      </div>

      <div className={classes.permissions}>
        <Stack>
          <Typography
            className={css({ color: "neutral.500" })}
            variant="caption1"
          >
            Permisos
          </Typography>
          <Group>
            <IconKey size={24} />
            <Typography variant="body">
              {role.permissions?.length || 0}
            </Typography>
          </Group>
        </Stack>
      </div>

      <div className={classes.users}>
        <Stack>
          <Typography
            className={css({ color: "neutral.500" })}
            variant="caption1"
          >
            Usuarios
          </Typography>
          <Group>
            {role.users?.length > 0 ? (
              <AvatarGroup>
                {role.users?.map((user) => (
                  <Avatar src={user.image} fallback={user.name?.[0]} />
                ))}
              </AvatarGroup>
            ) : (
              <Typography variant="body">Sin asignar</Typography>
            )}
          </Group>
        </Stack>
      </div>
    </li>
  );
}
