import clsx from 'clsx'
import { SidebarFooterRecipe } from '../sidebar.recipes'

interface SidebarFooterProps extends React.ComponentPropsWithRef<'div'> {}

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ className, children, ...props }) => {
	return (
		<div
			className={clsx(SidebarFooterRecipe, className)}
			{...props}
		>
			{children}
		</div>
	)
}
