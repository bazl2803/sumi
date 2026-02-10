import { cva } from 'panda/css'

export const HintRecipe = cva({
	base: {
		color: { base: 'neutral.500', _osDark: 'neutral.400' },
		transitionProperty: 'display',
		transitionDuration: '0.3s',
		transitionTimingFunction: 'ease-in-out',
		transitionBehavior: 'allow-discrete',
	},
	variants: {
		hidden: {
			true: {
				display: 'none',
			},
		},
		error: {
			true: {
				color: { base: 'red.500', _osDark: 'red.400' },
			},
		},
	},
})
