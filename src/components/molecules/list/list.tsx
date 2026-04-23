// --- Types -----------------------------------------------------------

interface ListProps extends React.ComponentPropsWithRef<"ul"> {
  children: React.ReactNode;
}

// --- Main Component ---------------------------------------------------------

export function List({ children, ...props }: ListProps) {
  return <ul {...props}>{children}</ul>;
}

// --- Subcomponents ----------------------------------------------------------
interface ListItemProps extends React.ComponentPropsWithRef<"li"> {
  children: React.ReactNode;
}

function ListItem({ children, ...props }: ListItemProps) {
  return <li {...props}>{children}</li>;
}

List.Item = ListItem;
