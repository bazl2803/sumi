import clsx from 'clsx'

interface SidebarPageProps extends React.ComponentPropsWithRef<'div'> {
	variant?: 'default' | 'inset'
}

export const SidebarPage = ({ className, ...props }: SidebarPageProps) => {
	return (
		<div
			className={clsx({ className })}
			{...props}
		/>
	)
}
