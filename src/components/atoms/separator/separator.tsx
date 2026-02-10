import clsx from 'clsx'
import { css } from 'panda/css'
import React from 'react'

interface SeparatorProps {
	children?: React.ReactNode
	className?: string
}

export const Separator: React.FC<SeparatorProps> = ({ children, className = '' }) => {
	return (
		<div
			className={clsx(
				css({
					display: 'flex',
					alignItems: 'center',
					gap: 2,
					w: 'full',
				}),
				className
			)}
		>
			<hr className={css({ flex: 1 })} />
			{children}
			<hr className={css({ flex: 1 })} />
		</div>
	)
}
