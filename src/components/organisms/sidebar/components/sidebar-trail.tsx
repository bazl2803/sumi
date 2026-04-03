import { SidebarTrailRecipe } from '../sidebar.recipes'
import { cx } from 'panda/css'

interface SidebarTrailProps extends React.HTMLAttributes<HTMLDivElement> { }

export const SidebarTrail: React.FC<SidebarTrailProps> = ({ className, ...props }) => {
	return (
		<div
			className={cx('sidebar-trail', SidebarTrailRecipe, className)}
			{...props}
		/>
	)
}
