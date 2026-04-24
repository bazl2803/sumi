import { getRoleByIdAction } from "@/actions/role.actions";
import { Appbar, Button, Segment, SegmentItem, Typography } from "@/components";
import { css, sva } from "panda/css";
import { PermissionsPage } from "./_components/permissions-page";
import { getAllPermissionsAction } from "@/actions/permission.actions";
import { IconChevronLeft } from "@tabler/icons-react";
import { navigate } from "next/dist/client/components/segment-cache/navigation";
import { BackButton } from "@/components/atoms/back-button/back-button";

interface ManageCredentialsDetailPageProps {
  params: Promise<{ id: string }>;
}

const ManageCredentialsDetailPageStyles = sva({
  slots: ["root", "backButton"],
  base: {
    root: {
      paddingBottom: 4,
      overflowY: "auto",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      "&::-webkit-scrollbar-thumb": {
        display: "none",
      },
      "&::-webkit-scrollbar-track": {
        display: "none",
      },
    },
    backButton: {
      md: { display: "none" },
    },
  },
});

export default async function ManageCredentialsDetailPage({
  params,
}: ManageCredentialsDetailPageProps) {
  const { id } = await params;
  const role = await getRoleByIdAction(id);
  const permissions = await getAllPermissionsAction();
  const styles = ManageCredentialsDetailPageStyles();

  if (!role) {
    return null;
  }

  return (
    <div className={styles.root}>
      <Appbar>
        <Appbar.Line className={styles.backButton}>
          <BackButton />
        </Appbar.Line>
        <Appbar.Line>
          <Typography variant="title1" emphasized>
            {role!.name}
          </Typography>
        </Appbar.Line>
        <Appbar.Line>
          <Segment defaultValue={"permissions"} fullWidth>
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
        <PermissionsPage role={role} permissions={permissions} />
      </div>
    </div>
  );
}
