import { getRoleByIdAction } from "@/actions/role.actions";
import { Appbar, Segment, SegmentItem, Typography } from "@/components";
import { css } from "panda/css";
import { PermissionItem, PermissionsList } from "./_components/permission-list";
import { getAllPermissionsAction } from "@/actions/permission.actions";
import { PermissionsPage } from "./_components/permissions-page";

interface ManageCredentialsDetailPageProps {
  params: Promise<{ id: string }>;
}

const ManageCredentialsDetailPageStyles = css({
  spaceY: 4,
});

export default async function ManageCredentialsDetailPage({
  params,
}: ManageCredentialsDetailPageProps) {
  const { id } = await params;
  const role = await getRoleByIdAction(id);

  if (!role) {
    return null;
  }

  return (
    <div className={ManageCredentialsDetailPageStyles}>
      <Appbar>
        <Appbar.Line>
          <Typography variant="title1" emphasized>
            {role!.name}
          </Typography>
        </Appbar.Line>
        <Appbar.Line>
          <Segment defaultValue={"permissions"}>
            <SegmentItem value="permissions">Permisos</SegmentItem>
            <SegmentItem value="users">Usuarios</SegmentItem>
          </Segment>
        </Appbar.Line>
      </Appbar>

      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
          paddingInline: 4,
        })}
      >
        <PermissionsPage role={role} />
      </div>
    </div>
  );
}
