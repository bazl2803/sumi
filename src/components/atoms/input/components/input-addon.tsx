import clsx from 'clsx'
import React from 'react'
import { InputAddonRecipe } from '../input.recipes'

interface InputAddonProps extends React.ComponentPropsWithoutRef<'div'> {}

export const InputAddon: React.FC<InputAddonProps> = ({ className, ...props }) => {
	return (
		<div
			{...props}
			className={clsx(InputAddonRecipe, className)}
		/>
	)
}
