import React from 'react'
import { css, cx } from 'panda/css'

interface CommandBoxInputGroupProps
	extends React.ComponentPropsWithRef<'div'> {}

const CommandBoxInputGroupStyles = css({
	display: 'flex',
	flexWrap: 'nowrap',
	flexDirection: 'row',
	gap: 4,
	paddingInline: 4,
	height: '40px',
	'& .command-box-input': {
		flex: 1,
		paddingBlock: 0,
	},
})

export const CommandBoxInputGroup = (props: CommandBoxInputGroupProps) => {
	return (
		<div
			{...props}
			className={cx('command-box-input-group', CommandBoxInputGroupStyles)}
		/>
	)
}
