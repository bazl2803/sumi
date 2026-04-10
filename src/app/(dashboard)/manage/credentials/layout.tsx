import { getRolesCollectionStats } from "@/features/roles/actions/getRolesCollectionStats";
import { sva } from "panda/css";
import { RolesList } from "./_components/roles-list";

export const ManageCredentialsLayoutStyles = sva({
  slots: ["root", "sidebar", "detail"],
  base: {
    root: {
      display: "grid",
      gridTemplateColumns: "1fr 3fr",
      gridTemplateRows: "1fr",
      gridTemplateAreas: `
        "sidebar detail"
      `,
    },
    sidebar: {
      gridArea: "sidebar",
    },
    detail: {
      gridArea: "detail",
    },
  },
});

export default async function ManageCredentialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const classes = ManageCredentialsLayoutStyles();
  const roles = await getRolesCollectionStats();

  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <RolesList roles={roles} />
      </div>
      <div className={classes.detail}>{children}</div>
    </div>
  );
}
