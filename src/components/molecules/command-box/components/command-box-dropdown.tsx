import React from 'react'
import { cva, cx } from 'panda/css'

interface CommandBoxDropdownProps extends React.ComponentPropsWithRef<'div'> {}

const CommandBoxDropdownStyles = cva({
	base: {
		display: 'none',
		height: 'auto',
		p: 4,
		pt: 1,
		opacity: 1,
		maxHeight: 420,
		overflowY: 'auto',
		scrollbarWidth: 'none',
		transitionProperty: 'display, opacity, height',
		transitionDuration: '0.3s, 0.5s, 0.3s',
		transitionBehavior: 'allow-discrete',
		transitionTimingFunction: 'ease-in-out',
		transitionDelay: '0s, 0.2s, 0',
		'@starting-style': {
			opacity: 0,
			height: 0,
		},
	},
})

export const CommandBoxDropdown = ({
	className,
	...props
}: CommandBoxDropdownProps) => {
	return (
		<div
			{...props}
			className={cx(
				CommandBoxDropdownStyles(),
				'command-box-dropdown',
				className,
			)}
		/>
	)
}
