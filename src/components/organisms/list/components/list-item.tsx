'use client'

import clsx from 'clsx'
import { ListItemRecipe } from '../list.recipe'

interface ListItemProps extends React.ComponentPropsWithRef<'li'> {
	selected?: boolean
}

export const ListItem = ({ className, selected, ...props }: ListItemProps) => {
	return (
		<li
			className={clsx(ListItemRecipe({ selected }), className)}
			{...props}
		/>
	)
}
