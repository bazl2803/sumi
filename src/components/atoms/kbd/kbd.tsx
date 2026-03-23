'use client'

import clsx from 'clsx'
import { KbdRecipe } from './kbd.recipes'

interface KbdProps extends React.ComponentPropsWithRef<'kbd'> {}

export const Kbd = ({ className, ...props }: KbdProps) => (
	<kbd
		{...props}
		className={clsx(KbdRecipe(), className)}
	/>
)
