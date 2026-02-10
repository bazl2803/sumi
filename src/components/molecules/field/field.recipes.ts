import { sva } from 'panda/css'

export const FieldRecipe = sva({
	slots: ['root', 'label', 'input', 'hint', 'error'],
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			gap: '2',
		},
		label: {
			fontSize: 'sm',
			fontWeight: 'medium',
			color: { base: 'gray.700', _osDark: 'gray.300' },
		},
	},
})
