'use client'
import { Navbar, NavbarItem } from '@/components'
import { IconHome, IconPackage, IconTruckDelivery, IconUserShield } from '@tabler/icons-react'
import { usePathname } from 'next/navigation'

export const DashboardNavbar = ({ className }: { className?: string }) => {
	const links = [
		{ href: '/dashboard', label: 'Inicio', icon: IconHome },
		{ href: '/dashboard/products', label: 'Productos', icon: IconPackage },
		{ href: '/dashboard/orders', label: 'Pedidos', icon: IconTruckDelivery },
		{ href: '/manage/credentials', label: 'Credenciales', icon: IconUserShield },
	]

	function isLinkSelected(href: string): boolean {
		const pathname = usePathname()
		// Implement logic to determine if the link is selected based on the current route
		// This is a placeholder implementation
		return pathname === href
	}

	return (
		<Navbar className={className}>
			{links.map((link) => (
				<NavbarItem
					key={link.href}
					href={link.href}
					label={link.label}
					icon={link.icon}
					selected={isLinkSelected(link.href)}
				/>
			))}
		</Navbar>
	)
}
