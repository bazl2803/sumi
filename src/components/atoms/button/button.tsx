import React from 'react'
import {ButtonIcon, ButtonLabel, ButtonRecipe} from '@/components'
import {ButtonAddon} from "./components/button-addon"
import clsx from 'clsx'

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    variant?: 'solid' | 'outline' | 'ghost' | 'link' | 'subtle' | 'soft'
    rounded?: 'full' | 'sm' | 'md' | 'lg'
    size?: 'sm' | 'md' | 'lg' | 'icon'
}

export const Button = ({
                           className,
                           variant,
                           size,
                           rounded,
                           ...props
                       }: ButtonProps) => (
    <button
        className={clsx(ButtonRecipe({variant, size, rounded}), className)}
        {...props}
    />
)

Button.Addon = ButtonAddon
Button.Label = ButtonLabel
Button.Icon = ButtonIcon
