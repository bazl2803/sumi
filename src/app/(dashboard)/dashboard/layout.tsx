import { css } from 'panda/css'
import { DashboardNavbar } from './_components/dashboard-navbar'

interface DashboardLayoutProps {
	children: React.ReactNode
}

const styles = css({
	padding: '4',
})

export default ({ children }: DashboardLayoutProps) => {
	return (
		<div className={styles}>
			{children}
			<DashboardNavbar />
		</div>
	)
}
