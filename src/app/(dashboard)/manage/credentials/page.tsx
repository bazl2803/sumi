import { Typography } from "@/components";
import { css } from "panda/css";

// --- Styles -----------------------------------------------------------------
const ManageCredentialsPageStyles = css({
  display: "none",
  md: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  }

});

// --- JSX --------------------------------------------------------------------
export default function ManageCredentialsPage() {
  return (
    <Typography className={ManageCredentialsPageStyles} variant="headline">
      Selecciona un rol para ver sus detalles
    </Typography>
  );
}
