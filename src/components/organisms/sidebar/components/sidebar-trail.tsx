import clsx from 'clsx'
import { SidebarTrailRecipe } from '../sidebar.recipes'
import { SurfaceRecipe } from '@/components/atoms/surface/surface.recipes'

interface SidebarTrailProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarTrail: React.FC<SidebarTrailProps> = ({ className, ...props }) => {
	return (
		<div
			className={clsx(SidebarTrailRecipe, SurfaceRecipe({ variant: 'outline' }), className)}
			{...props}
		/>
	)
}
