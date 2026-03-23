import { css, cx } from 'panda/css'

interface CommandBoxDropdownItemProps
	extends React.ComponentPropsWithRef<'div'> {}

export const CommandBoxDropdownItemStyles = css({
	p: 2,
	m: 1,
	rounded: 10,
	_hover: {
		bg: { base: 'neutral.100/50', _osDark: 'neutral.950/50' },
		outline: { base: '1px solid', _osDark: '1px solid' },
		outlineColor: { base: 'neutral.200', _osDark: 'neutral.800' },
		userSelect: 'none',
		cursor: 'pointer',
	},
})

export const CommandBoxDropdownItem = ({
	className,
	...props
}: CommandBoxDropdownItemProps) => {
	return (
		<div
			className={cx(
				'command-box-dropdown-item',
				CommandBoxDropdownItemStyles,
				className,
			)}
			{...props}
		/>
	)
}
