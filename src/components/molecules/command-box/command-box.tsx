import React from 'react'
import { cx, sva } from 'panda/css'
import { CommandBoxInputGroup } from './components/command-box-input-group'
import { CommandBoxInput } from './components/command-box-input'
import { CommandBoxAddon } from './components/command-box-addon'
import { CommandBoxDropdown } from './components/command-box-dropdown'
import { CommandBoxDropdownItem } from './components/command-box-dropdown-item'
import { CommandBoxDropdownItemGroup } from './components/command-box-dropdown-item-group'

// --- Types ------------------------------------------------------------------
interface CommandBoxProps extends React.ComponentPropsWithRef<'div'> {}

// --- Styles -----------------------------------------------------------------
const CommandBoxStyles = sva({
	slots: ['root', 'wrapper'],
	base: {
		root: {
			position: 'relative',
			alignSelf: 'start',
		},
		wrapper: {
			position: 'absolute',
			top: 'full',
			zIndex: 100,
			inset: 0,
			height: 'max-content',
			backgroundColor: { base: 'neutral.50/90', _osDark: 'neutral.950/90' },
			borderColor: { base: 'neutral.200', _osDark: 'neutral.800' },
			border: { base: '1px solid', _osDark: '1px solid' },
			borderRadius: 20,
			_focusWithin: {
				'& > .command-box-dropdown': {
					display: 'block',
				},
			},
		},
	},
})

// --- Component --------------------------------------------------------------
export const CommandBox = ({
	className,
	children,
	...props
}: CommandBoxProps) => {
	const classes = CommandBoxStyles()

	return (
		<div
			{...props}
			className={cx('command-box', classes.root, className)}
		>
			<div
				className={classes.wrapper}
				style={{ backdropFilter: 'blur(8px)' }}
			>
				{children}
			</div>
		</div>
	)
}

CommandBox.InputGroup = CommandBoxInputGroup
CommandBox.Input = CommandBoxInput
CommandBox.Addon = CommandBoxAddon
CommandBox.Dropdown = CommandBoxDropdown
CommandBox.DropdownItem = CommandBoxDropdownItem
CommandBox.DropdownItemGroup = CommandBoxDropdownItemGroup
