import { css, cva } from 'panda/css'

export const DropdownRecipe = css({
	display: 'flex',
	flexDirection: 'column',
	gap: 4,
	position: 'relative',
})

export const DropdownTriggerRecipe = cva({
	variants: {
		open: {
			true: {
				visibility: 'hidden'
			},
			false: {
				visibility: 'visible'
			}
		}
	}
})

export const DropdownContentRecipe = cva({
	base: {
		display: 'flex',
		flexDirection: 'column',
		position: 'absolute',
		top: '0',
		right: 0,
		zIndex: 10,
		padding: 2,
		width: 'fit-content',
		scale: 0,
		transition: 'scale 0.2s ease-in-out',
		transformOrigin: 'top right',
		pointerEvents: 'none',
		backgroundColor: { base: 'neutral.50/70', _osDark: 'neutral.800/70' },
		border: '1px solid',
		borderColor: { 'base': 'neutral.200/90', _osDark: 'neutral.800/90' },
		backdropBlur: 'xs',
		borderRadius: '3xl',
		boxShadow: 'lg',
	},
	variants: {
		open: {
			true: {
				scale: 1,
				pointerEvents: 'auto',
			},
		},
	},
})

export const DropdownItemRecipe = cva({
	base: {
		display: 'flex',
		flexWrap: 'nowrap',
		alignItems: 'center',
		paddingInline: 4,
		paddingBlock: 2,
		textWrap: 'nowrap',
		gap: 4,
		transition: 'background-color 0.2s ease-in-out',
		cursor: 'pointer',
		borderRadius: '2xl',
		_hover: {
			backgroundColor: {
				base: 'black/10',
				_osDark: 'white/10'
			},
		}
	},
	variants: {
		destructive: {
			true: {
				color: { base: 'red.500', _osDark: 'red.600' },
			}
		}
	}
})
