import { Typography } from '@/components'
import { css, cx } from 'panda/css'

interface CommandBoxDropdownItemGroupProps
	extends React.ComponentPropsWithRef<'div'> {
	label?: string
}

export const CommandBoxDropdownItemGroupStyles = css({
	display: 'flex',
	flexWrap: 'nowrap',
	flexDirection: 'column',
	gap: 2,
})

export const CommandBoxDropdownItemGroup = ({
	className,
	children,
	label,
	...props
}: CommandBoxDropdownItemGroupProps) => {
	return (
		<div
			className={cx(
				'command-box-dropdown-item-group',
				CommandBoxDropdownItemGroupStyles,
				className,
			)}
			{...props}
		>
			{label && (
				<Typography
					variant="caption1"
					className={css({
						paddingInline: 2,
						color: {
							base: 'neutral.500',
							_osDark: 'neutral.400',
						},
					})}
				>
					{label}
				</Typography>
			)}
			{children}
		</div>
	)
}
