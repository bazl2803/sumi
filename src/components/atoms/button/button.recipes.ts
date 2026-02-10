import { css, cva } from 'panda/css'

export const ButtonRecipe = cva({
	base: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 'lg',
		fontWeight: 500,
		gap: 1,
	},
	variants: {
		variant: {
			solid: {
				backgroundColor: { base: 'black', _osDark: 'white' },
				color: { base: 'white', _osDark: 'black' },
				_hover: {
					backgroundColor: { base: 'gray.800', _osDark: 'gray.100' },
				},
			},
			outline: {
				outlineWidth: 1,
				outlineStyle: 'solid',
				outlineColor: { base: 'gray.200', _osDark: 'gray.700' },
				_hover: {
					backgroundColor: { base: 'gray.100', _osDark: 'gray.800' },
				},
			},
			ghost: {
				_hover: {
					backgroundColor: { base: 'gray.100', _osDark: 'gray.800' },
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
				outlineColor: { base: 'gray.200', _osDark: 'gray.700' },
				backgroundColor: { base: 'gray.100', _osDark: 'gray.900' },
				_hover: {
					backgroundColor: { base: 'gray.200', _osDark: 'gray.800' },
				},
			},
			soft: {
				backgroundColor: { base: 'gray.100', _osDark: 'gray.800' },
				_hover: {
					backgroundColor: { base: 'gray.200', _osDark: 'gray.700' },
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
				padding: 1,
				fontSize: 'sm',
				height: '36px',
				minWidth: '36px',
			},
			md: {
				padding: 2,
				fontSize: 'md',
				height: 10,
				minWidth: '40px',
			},
			lg: {
				padding: 3,
				fontSize: 'lg',
				height: '56px',
				minWidth: '56px',
			},
			icon: {
				padding: 1,
				height: '40px',
				width: '40px',
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
	gap: 2,
	padding: 1,
})

export const ButtonIconRecipe = css({
	padding: 1,
})
