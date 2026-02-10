import clsx from 'clsx'
import { GridRecipe } from './grid.recipes'

interface GridProps extends React.ComponentPropsWithRef<'div'> {}

export const Grid: React.FC<GridProps> = ({ className, ...props }) => {
	return (
		<div
			className={clsx(GridRecipe, className)}
			{...props}
		/>
	)
}
