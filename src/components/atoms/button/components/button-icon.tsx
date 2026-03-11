'use client'

import React from "react";
import {TablerIcon} from '@tabler/icons-react'
import {ButtonIconRecipe} from '../button.recipes'
import {cx} from "panda/css";

interface ButtonIconProps extends React.ComponentPropsWithoutRef<'div'> {
    icon: TablerIcon
    size?: number
}

export const ButtonIcon = ({icon: Icon, size = 20, className, ...props}: ButtonIconProps) => {
    return (
        <div {...props} className={cx('button-icon', ButtonIconRecipe, className)}>
            <Icon size={size}/>
        </div>
    )
}
