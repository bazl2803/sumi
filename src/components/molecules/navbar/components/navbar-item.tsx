'use client'

import clsx from 'clsx'
import React from 'react'
import { NavbarItemRecipe } from '@/components'
import Link from 'next/link'
import { TablerIcon } from '@tabler/icons-react'

// Base props for both link and asChild props
interface NavbarItemPropsBase extends React.ComponentPropsWithRef<'a'> {
    asChild?: boolean,
    className?: string
    selected?: boolean
}

// If asChild is false, render a link with the passed href
interface NavbarItemLinkProps extends NavbarItemPropsBase {
    href: string
    asChild?: false,
    icon?: TablerIcon,
    label?: string
}

// If asChild is true, render the children directly with the passed props
interface NavbarItemAsChildProps extends NavbarItemPropsBase {
    asChild: true,
    children: React.ReactElement,
}

// Union type for both props
export type NavbarItemProps = NavbarItemLinkProps | NavbarItemAsChildProps

export const NavbarItem: React.FC<NavbarItemProps> = ({ selected, ...props }) => {
    const styles = NavbarItemRecipe({ selected });

    // If asChild is true, render the children directly with the passed props
    if (props.asChild) {
        const { children, className } = props

        return React.cloneElement(children, {
            ...props,
            className: clsx(styles.root, (children.props as any)?.className, className),
        } as React.HTMLAttributes<HTMLElement>)
    }

    // If asChild is false, render a link with the passed href
    const { icon: Icon, label, href } = props

    return (
        <Link
            {...props}
            className={clsx(styles.root, props.className)}
            href={href || '#'}
        >
            {Icon && <Icon/>}
            <span className={styles.label}>{label}</span>
        </Link>
    )
}
