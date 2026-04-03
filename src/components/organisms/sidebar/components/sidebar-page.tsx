import clsx from 'clsx'
import { css } from 'panda/css'

const styles = css({
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
})

interface SidebarPageProps extends React.ComponentPropsWithRef<'div'> {
	variant?: 'default' | 'inset'
}

export const SidebarPage = ({ className, ...props }: SidebarPageProps) => {
	return (
		<div
			className={clsx(styles, className)}
			{...props}
		/>
	)
}
