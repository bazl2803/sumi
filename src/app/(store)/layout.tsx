import { css } from 'panda/css'
import { StoreNavbar } from './_components/store-navbar'
import { StoreAppbar } from './_components/store-appbar'

/**
 * Layout for all store pages
 */

export default function StoreLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div
			className={css({
				height: 'full',
				spaceY: 8,
			})}
		>
			<StoreAppbar />
			<div
				className={css({
					maxWidth: '7xl',
					marginInline: 'auto',
					paddingInline: 8,
				})}
			>
				{children}
			</div>
			<StoreNavbar />
		</div>
	)
}
