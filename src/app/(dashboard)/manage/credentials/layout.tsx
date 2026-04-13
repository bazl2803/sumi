import { sva } from "panda/css";
import { CredentialsSidebar } from "./_components/credentials-sidebar";
import { getRolesCollectionStats } from "@/features/roles/actions/getRolesCollectionStats";

export const ManageCredentialsLayoutStyles = sva({
  slots: ["root", "sidebar", "detail"],
  base: {
    root: {
      md: {
        display: "grid",
        gridTemplateColumns: "360px 1fr",
        gridTemplateRows: "1fr",
        gridTemplateAreas: `
        "sidebar detail"
        `,
        height: "100%",
      },
    },
    detail: {
      display: "none",
      md: { display: "block" },
    },
  },
});

export default async function ManageCredentialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const roles = await getRolesCollectionStats();
  const classes = ManageCredentialsLayoutStyles();

  return (
    <div className={classes.root}>
      <CredentialsSidebar roles={roles} />
      <div className={classes.detail}>{children}</div>
    </div>
  );
}
