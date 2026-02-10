'use client'

import { DropdownRecipe } from '@/components/molecules/dropdown/dropdown.recipes'
import React from 'react'
import { DropdownContext } from './dropdown-context'

interface DropdownProps extends React.ComponentProps<'div'> {
	children: React.ReactNode
}

export const Dropdown = ({ children, ...props }: DropdownProps) => {
	const [open, setOpen] = React.useState(false)

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (!event.target) return
			if (!(event.target instanceof HTMLElement)) return
			if (event.target.closest('[data-dropdown]')) return
			setOpen(false)
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<DropdownContext.Provider value={{ open, setOpen }}>
			<div
				{...props}
				className={DropdownRecipe}
			>
				{children}
			</div>
		</DropdownContext.Provider>
	)
}
