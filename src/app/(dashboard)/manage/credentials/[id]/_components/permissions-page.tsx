"use client";

import { css } from "panda/css";
import { Role } from "@/models/role.model";
import { Permission } from "@/models/permission.model";
import { PermissionItem, PermissionsList } from "./permission-list";
import { useState } from "react";
import { updateRolePermissionsAction } from "@/actions/role.actions";
import { Typography } from "@/components";

// --- Types ------------------------------------------------------------------
interface PermissionsPageProps {
  role: Role;
  permissions: Permission[];
}

// --- Styles ------------------------------------------------------------------
const PermissionsPageStyles = css({
  display: "flex",
  flexDirection: "column",
  rowGap: 2,
});

// --- Component --------------------------------------------------------------
export function PermissionsPage({ role, permissions }: PermissionsPageProps) {
  const [checkedPermissions, setCheckedPermissions] = useState<string[]>(
    role.permissions || [],
  );

  const togglePermission = async (permissionId: string) => {
    // Determine the new state of the permission
    const updatedPermissions = checkedPermissions.includes(permissionId)
      ? // If the permission is already checked, remove it
        checkedPermissions.filter((id) => id !== permissionId)
      : // If the permission is not checked, add it
        [...checkedPermissions, permissionId];

    // Optimistically update the state
    setCheckedPermissions(updatedPermissions);
    // Update the database
    await updateRolePermissionsAction(role._id, updatedPermissions);
  };

  return (
    <div className={PermissionsPageStyles}>
      <Typography
        className={css({ paddingInline: 4, color: "neutral.500" })}
        variant="callout"
        emphasized
      >
        Productos
      </Typography>
      <PermissionsList>
        {permissions
          .filter((permission) => permission.section === "products")
          .map((permission) => (
            <PermissionItem
              key={permission._id}
              name={permission.name}
              checked={checkedPermissions.includes(permission._id)}
              onCheckedChange={() => togglePermission(permission._id)}
            />
          ))}
      </PermissionsList>
    </div>
  );
}
