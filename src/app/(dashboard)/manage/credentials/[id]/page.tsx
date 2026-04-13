import { Typography } from "@/components";
import { css } from "panda/css";

interface ManageCredentialsDetailPageProps {
  params: Promise<{ id: string }>;
}

const ManageCredentialsDetailPageStyles = css({
  padding: 8,
});

export default async function ManageCredentialsDetailPage({
  params,
}: ManageCredentialsDetailPageProps) {
  const { id } = await params;

  return (
    <div className={ManageCredentialsDetailPageStyles}>
      <Typography variant="title1">{id}</Typography>
    </div>
  );
}
