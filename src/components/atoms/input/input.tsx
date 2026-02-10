'use client'

import { clsx } from 'clsx'
import { InputRecipe } from './input.recipes'

interface InputProps extends React.ComponentPropsWithRef<'input'> {}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
	return (
		<input
			{...props}
			className={clsx(InputRecipe, className)}
		/>
	)
}
