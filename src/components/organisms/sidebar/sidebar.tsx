'use client'
import clsx from 'clsx'
import React from 'react'
import { SidebarRecipe, SidebarContext } from '@/components'

interface SidebarProps extends React.ComponentPropsWithRef<'div'> {}

export const Sidebar: React.FC<SidebarProps> = ({ className, children, ...props }) => {
	const [selected, setSelected] = React.useState<string>('')
	const [isOpen, setIsOpen] = React.useState<boolean>(true)

	return (
		<SidebarContext.Provider value={{ selected, setSelected, isOpen, setIsOpen }}>
			<div
				className={clsx(SidebarRecipe, className)}
				{...props}
			>
				{children}
			</div>
		</SidebarContext.Provider>
	)
}
