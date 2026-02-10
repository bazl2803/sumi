import { css } from 'panda/css'

export const InputRecipe = css({
	width: 'full',
	border: 'none',
	outline: 'none',
	paddingY: 2,
	paddingX: 2,
	fontSize: 'sm',
	_placeholder: { color: { base: 'gray.400', _osDark: 'gray.400' } },
})

export const InputGroupRecipe = css({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	width: 'full',
	paddingX: 3,
	gap: 2,
	'& > input': {
		paddingX: 0
	}
})

export const InputAddonRecipe = css({
	display: 'flex',
	alignItems: 'center',
	color: 'gray.400',
})