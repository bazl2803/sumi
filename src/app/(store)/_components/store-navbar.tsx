'use client'
import { usePathname } from 'next/navigation'
import { Navbar, NavbarItem } from '@/components'
import { IconHome, IconRocket, IconSearch, IconShoppingCart } from '@tabler/icons-react'
import { css } from 'panda/css'

const styles = css({
	bottom: '4',
	position: 'sticky',
	paddingX: 4,
	lg: { display: 'none' },
})

export const StoreNavbar = () => {
	const links = [
		{ href: '/', label: 'Inicio', icon: IconHome },
		{ href: '/explore', label: 'Explorar', icon: IconRocket },
		{ href: '/cart', label: 'Carrito', icon: IconShoppingCart },
		{ href: '/search', label: 'Buscar', icon: IconSearch },
	]

	function getCurrentPath() {
		// Get the current path using next router.
		const pathname = usePathname()
		return pathname || '/'
	}

	return (
		<div className={styles}>
			<Navbar>
				{links.map((link) => (
					<NavbarItem
						key={link.href}
						href={link.href}
						label={link.label}
						icon={link.icon}
						selected={getCurrentPath() === link.href}
					/>
				))}
			</Navbar>
		</div>
	)
}
