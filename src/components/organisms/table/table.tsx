import clsx from "clsx";
import { TableRecipe } from "./table.recipes";

interface TableProps extends React.ComponentPropsWithRef<'table'> {
}

export const Table = ({ className, ...props }: TableProps) => {
    return <table className={clsx(TableRecipe, className)} {...props} />;
};