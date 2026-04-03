'use client'
import React from 'react'
import { ButtonRecipe } from './button.recipes'
import { ButtonIcon } from './components/button-icon'
import { ButtonLabel } from './components/button-label'
import { ButtonAddon } from './components/button-addon'
import clsx from 'clsx'

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
	variant?: 'solid' | 'outline' | 'ghost' | 'link' | 'subtle' | 'soft'
	rounded?: 'full' | 'sm' | 'md' | 'lg'
	size?: 'sm' | 'md' | 'lg' | 'icon'
}

export function Button({
	className,
	variant,
	size,
	rounded,
	...props
}: ButtonProps) {
	return (
		<button
			className={clsx(ButtonRecipe({ variant, size, rounded }), className)}
			{...props}
		/>
	)
}

Button.Icon = ButtonIcon
Button.Label = ButtonLabel
Button.Addon = ButtonAddon