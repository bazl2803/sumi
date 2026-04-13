import { cx, sva } from "panda/css";
import { AppbarLine } from "./components/appbar-line";

// --- Types ------------------------------------------------------------------
interface AppbarProps extends React.ComponentPropsWithRef<"div"> {
  children:
    | React.ReactElement<typeof AppbarLine>
    | React.ReactElement<typeof AppbarLine>[];
}

// -- Styles ------------------------------------------------------------------
const AppbarStyles = sva({
  className: "appbar",
  slots: ["root", "wrapper"],
  base: {
    root: {
      display: "flex",
      alignItems: "top",
      width: "full",
      bgLinear: "to-b",
      gradientFrom: { base: "white", _osDark: "black" },
      gradientVia: { base: "white/70", _osDark: "black/70" },
      gradientViaPosition: "60%",
      gradientTo: "transparent",
      gradientToPosition: "100%",
      position: "sticky",
      top: 0,
      zIndex: 100,
      paddingTop: { base: 4, md: 6 },
      paddingBottom: { base: 6, md: 8 },
    },
    wrapper: {
      paddingInline: { base: 4, "@/md": 8 },
      display: "flex",
      flexDirection: "column",
      height: "fit-content",
      rowGap: 4,
      maxWidth: "7xl",
      width: "full",
      marginInline: "auto",
    },
  },
});

// --- JSX --------------------------------------------------------------
export const Appbar = ({ children, className, ...props }: AppbarProps) => {
  const styles = AppbarStyles();

  return (
    <div {...props} className={cx(styles.root, className)}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

Appbar.Line = AppbarLine;
