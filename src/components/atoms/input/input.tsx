'use client'

import { InputRecipe, InputVariantsRecipe } from './input.recipes'
import { cx } from 'panda/css'

interface InputProps extends React.ComponentPropsWithRef<'input'> {
	variant?: 'subtle' | 'filled' | 'outlined'
	shape?: 'rounded' | 'square' | 'pill'
}

export const Input: React.FC<InputProps> = ({
	variant,
	shape,
	className,
	...props
}) => {
	return (
		<input
			className={cx(
				InputRecipe,
				InputVariantsRecipe({ variant, shape }),
				className,
			)}
			{...props}
		/>
	)
}
