import { TableRecipe } from "./table.recipes";
import { cx } from "panda/css";

interface TableProps extends React.ComponentPropsWithRef<'table'> {
}

export const Table = ({ className, ...props }: TableProps) => {
    return <table className={cx(TableRecipe, className)} {...props} />;
};
