"use client";

import { css } from "panda/css";
import { Role } from "@/models/role.model";
import { Permission } from "@/models/permission.model";
import { PermissionItem, PermissionsList } from "./permission-list";
import { useState } from "react";
import { updateRolePermissionsAction } from "@/actions/role.actions";

interface PermissionsPageProps {
  role: Role;
  permissions: Permission[];
}

const PermissionsPageStyles = css({
  display: "flex",
  flexDirection: "column",
  rowGap: 2,
});

export function PermissionsPage({ role, permissions }: PermissionsPageProps) {
  const [checkedPermissions, setCheckedPermissions] = useState<string[]>(
    role.permissions || [],
  );

  const togglePermission = async (permissionId: string) => {
    const updatedPermissions = checkedPermissions.includes(permissionId)
      ? checkedPermissions.filter((id) => id !== permissionId)
      : [...checkedPermissions, permissionId];

    setCheckedPermissions(updatedPermissions);
    await updateRolePermissionsAction(role._id, updatedPermissions);
  };

  return (
    <div className={PermissionsPageStyles}>
      <PermissionsList>
        {permissions.map((permission) => (
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
