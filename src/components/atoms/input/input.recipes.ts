'use client'
import { css, cva } from 'panda/css'

export const InputRecipe = css({
	width: 'full',
	border: 'none',
	outline: 'none',
	paddingBlock: 2,
	paddingInline: 3,
	fontSize: 'sm',
	_placeholder: {
		color: {
			base: 'gray.400',
			_osDark: 'gray.400'
		}
	},
	_autofill: {
		boxShadow: {
			base: '0 0 0px 1000px oklch(92.8% 0.006 264.531) inset',
			_osDark: '0 0 0px 1000px oklch(21% 0.034 264.665) inset'
		},
		transition: 'background-color 5000s ease-in-out 0s',
		WebkitTextFillColor: { base: 'black', _osDark: 'white' },
		color: {
			base: 'gray.400',
			_osDark: 'gray.400'
		}
	},
})

export const InputVariantsRecipe = cva({
	variants: {
		variant: {
			unstyled: {},
			subtle: {
				border: '1px solid',
				borderColor: { base: 'neutral.200', _osDark: 'neutral.800' },
				backgroundColor: { base: 'neutral.50', _osDark: 'neutral.950' }
			},
			filled: {
				backgroundColor: { base: 'neutral.50', _osDark: 'neutral.950' }
			},
			outlined: {
				border: '1px solid',
				borderColor: { base: 'neutral.200', _osDark: 'neutral.800' },
			}
		},
		shape: {
			rounded: { borderRadius: 'lg' },
			square: { borderRadius: 0 },
			pill: { borderRadius: 'full' }
		}
	},
	defaultVariants: {
		variant: 'subtle',
		shape: 'rounded'
	}
})

export const InputGroupRecipe = css({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	width: 'full',
	paddingX: 3,
	gap: 2,
	'& > input': {
		paddingX: 0,
		border: 'none',
		backgroundColor: 'transparent'
	}
})

export const InputAddonRecipe = css({
	display: 'flex',
	alignItems: 'center',
	color: 'gray.400',
})