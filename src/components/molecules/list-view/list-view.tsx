// --- Types -----------------------------------------------------------

import { cx } from "panda/css";

interface ListViewProps extends React.ComponentPropsWithRef<"ul"> {
  children: React.ReactNode;
}

// --- Main Component ---------------------------------------------------------

export function ListView({ children, className, ...props }: ListViewProps) {
  return (
    <ul className={cx(className)} {...props}>
      {children}
    </ul>
  );
}

// --- Subcomponents ----------------------------------------------------------
interface ListViewItemProps extends React.ComponentPropsWithRef<"li"> {
  children: React.ReactNode;
}

function ListViewItem({ children, ...props }: ListViewItemProps) {
  return <li {...props}>{children}</li>;
}

ListView.Item = ListViewItem;
