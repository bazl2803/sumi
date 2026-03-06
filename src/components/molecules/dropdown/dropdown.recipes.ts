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
		gap: 4,
		position: 'absolute',
		top: '0',
		right: 0,
		zIndex: 10,
		width: 'fit-content',
		scale: 0,
		transition: 'scale 0.2s ease-in-out',
		transformOrigin: 'top right',
		pointerEvents: 'none',
		backgroundColor: { base: 'gray.50', _osDark: 'gray.800' },
		border: '1px solid',
		borderColor: { 'base': 'gray.200', _osDark: 'gray.800' },

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
		paddingInline: '6',
		paddingBlock: '2.5',
		textWrap: 'nowrap',
		gap: 4,
		transition: 'background-color 0.2s ease-in-out',
		cursor: 'pointer',
	},
	variants: {
		destructive: {
			true: {
				color: 'red',
			}
		}
	}
})
