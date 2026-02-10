import clsx from 'clsx'
import { SidebarContentRecipe } from '../sidebar.recipes'

interface SidebarContentProps extends React.ComponentPropsWithRef<'div'> {}

export const SidebarContent = ({ className, ...props }: SidebarContentProps) => {
	return (
		<div
			className={clsx(SidebarContentRecipe, className)}
			{...props}
		/>
	)
}
