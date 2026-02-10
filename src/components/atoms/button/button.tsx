import React from 'react'
import { ButtonRecipe } from '@/components'
import clsx from 'clsx'

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
	variant?: 'solid' | 'outline' | 'ghost' | 'link' | 'subtle' | 'soft'
	rounded?: 'full' | 'sm' | 'md' | 'lg'
	size?: 'sm' | 'md' | 'lg' | 'icon'
}

export const Button: React.FC<ButtonProps> = ({ className, variant, size, rounded, ...props }) => (
	<button
		className={clsx(ButtonRecipe({ variant, size, rounded }), className)}
		{...props}
	/>
)
