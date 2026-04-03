'use client'

import React from 'react'
import { SidebarRecipe, SidebarContext } from '@/components'
import { cx } from 'panda/css'

// --- Props -----------------------------------------------------------
interface SidebarProps extends React.ComponentPropsWithRef<'div'> { }

// --- JSX --------------------------------------------------------------------
export function Sidebar({ className, children, ...props }: SidebarProps) {
	const [selected, setSelected] = React.useState<string>('')
	const [isOpen, setIsOpen] = React.useState<boolean>(true)

	return (
		<SidebarContext.Provider value={{ selected, setSelected, isOpen, setIsOpen }}>
			<div
				{...props}
				className={cx('sidebar', SidebarRecipe, className)}
			>
				{children}
			</div>
		</SidebarContext.Provider>
	)
}
