import clsx from "clsx"
import { ContainerRecipe } from "./container.recipes"

interface ContainerProps extends React.ComponentPropsWithRef<'div'> {
    children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({ className, ...props }) =>
    <div className={clsx(ContainerRecipe, className)} {...props} />
