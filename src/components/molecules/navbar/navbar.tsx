import React from 'react'
import { NavbarItem } from './components/navbar-item'
import { NavbarRecipe } from './navbar.recipes'
import { cx } from 'panda/css'

interface NavbarProps extends React.ComponentPropsWithRef<'nav'> {
	children:
	| React.ReactElement<typeof NavbarItem>
	| React.ReactElement<typeof NavbarItem>[]
}

export const Navbar = ({ className, ...props }: NavbarProps) => {
	return (
		<nav
			{...props}
			className={cx('navbar', NavbarRecipe, className)}
			style={{ backdropFilter: 'blur(8px)' }}
		/>
	)
}
