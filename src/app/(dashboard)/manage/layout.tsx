import { css, sva } from 'panda/css'
import { DashboardNavbar } from '../_components/dashboard-navbar'
import { DashboardSidebar } from '../_components/dashboard-sidebar'

// --- Props para el layout ---
interface DashboardLayoutProps {
	children: React.ReactNode
}

const DashboardLayoutStyles = sva({
	className: 'dashboard-layout',
	slots: ['root', 'main', 'navbar', 'sidebar'],
	base: {
		root: {
			height: '100vh',
			width: '100vw',
			md: {
				display: 'grid',
				gridTemplateColumns: '240px 1fr',
				gridTemplateRows: '1fr auto',
				gridTemplateAreas: `
					'sidebar main'
					'sidebar navbar'
				`,
			}
		},
		main: {
			gridArea: 'main',
			overflowY: 'auto',
		},
		navbar: {
			gridArea: 'navbar',
			position: 'fixed',
			bottom: 0,
			insetInline: 0,
			mx: 2,
			mb: 2,
			zIndex: 10,
			md: { display: 'none' }
		},
		sidebar: {
			gridArea: 'sidebar',
			mdDown: { display: 'none' }
		}
	}
})

// --- Layout para el dashboard ---
export default ({ children }: DashboardLayoutProps) => {
	const styles = DashboardLayoutStyles()

	return (
		<div className={styles.root}>
			<DashboardSidebar className={styles.sidebar} />
			<div className={styles.main}>
				{children}
			</div>
			<DashboardNavbar className={styles.navbar} />
		</div>
	)
}
