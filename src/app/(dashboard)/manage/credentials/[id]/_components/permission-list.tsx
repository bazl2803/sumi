"use client";

import { Group, Switch } from "@/components";
import { IconKey } from "@tabler/icons-react";
import { css } from "panda/css";

interface PermissionsListProps {
  children?: React.ReactNode;
}

export function PermissionsList({ children }: PermissionsListProps) {
  return (
    <div
      className={css({
        backgroundColor: { base: "neutral.100", _osDark: "neutral.900" },
        borderRadius: "3xl",
        paddingBlock: 2,
        "& > *:not(:last-child)": {
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 12,
            height: "1px",
            backgroundColor: { base: "neutral.200", _osDark: "neutral.800" },
          },
        },
      })}
    >
      {children}
    </div>
  );
}

export function PermissionItem({
  name,
  checked,
  onCheckedChange,
}: {
  name: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}) {
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "space-between",
        paddingBlock: 3,
        paddingInline: 4,
        w: "full",
      })}
    >
      <Group>
        <IconKey size={20} />
        <span>{name}</span>
      </Group>
      <Switch checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  );
}
