import { css, cva } from 'panda/css'

export const ButtonRecipe = cva({
	base: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 'lg',
		fontWeight: 500,
	},
	variants: {
		variant: {
			solid: {
				backgroundColor: { base: 'black', _osDark: 'white' },
				color: { base: 'white', _osDark: 'black' },
				_hover: {
					backgroundColor: { base: 'neutral.800', _osDark: 'neutral.100' },
				},
			},
			outline: {
				outlineWidth: 1,
				outlineStyle: 'solid',
				outlineColor: { base: 'neutral.200', _osDark: 'neutral.800' },
				_hover: {
					backgroundColor: { base: 'neutral.200', _osDark: 'neutral.700' },
				},
			},
			ghost: {
				_hover: {
					backgroundColor: { base: 'neutral.100', _osDark: 'neutral.800' },
				},
			},
			link: {
				textDecoration: 'none',
				color: { base: 'black', _osDark: 'white' },
				_hover: {
					textDecoration: 'underline',
				},
			},
			subtle: {
				outlineWidth: 1,
				outlineStyle: 'solid',
				outlineColor: { base: 'neutral.200', _osDark: 'neutral.700' },
				backgroundColor: { base: 'neutral.100', _osDark: 'neutral.900' },
				_hover: {
					backgroundColor: { base: 'neutral.200', _osDark: 'neutral.950' },
				},
			},
			soft: {
				backgroundColor: { base: 'neutral.100', _osDark: 'neutral.800' },
				_hover: {
					backgroundColor: { base: 'neutral.200', _osDark: 'neutral.700' },
				},
			},
		},
		rounded: {
			none: { borderRadius: 0 },
			sm: { borderRadius: 'sm' },
			md: { borderRadius: 'md' },
			lg: { borderRadius: 'lg' },
			full: { borderRadius: 'full' },
		},
		size: {
			sm: {
				paddingBlock: 1,
				paddingInline: 1,
				fontSize: 'sm',
				height: 9,
				minWidth: 9,
				'& button-addon': {
					height: 7
				},
				'& button-icon': {
					width: 7
				}
			},
			md: {
				paddingBlock: 2,
				paddingInline: 1.5,
				fontSize: 'md',
				height: 10,
				minWidth: 10,
				'& button-addon': {
					height: 8
				},
				'& button-icon': {
					width: 8
				}
			},
			lg: {
				paddingBlock: 3,
				paddingInline: 2,
				fontSize: 'lg',
				height: 11,
				minWidth: 11,
				'& > button-addon, & > button-icon': {
					height: 9
				},
				'& > button-icon': {
					width: 9
				}
			},
			icon: {
				padding: 1,
				height: 10,
				width: 10,
			},
		},
	},
	defaultVariants: {
		variant: 'solid',
		size: 'md',
		rounded: 'lg',
	},
})

export const ButtonLabelRecipe = css({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	fontWeight: 500,
	textWrap: 'nowrap',
	paddingInline: 2,
})

export const ButtonIconRecipe = css({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	rounded: 'full',
	h: 8,
	w: 8,
})
