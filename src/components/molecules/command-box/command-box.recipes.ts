import { sva, css } from "panda/css";

const cornerRadius = '2xl'

export const CommandBoxRecipe = sva({
	slots: ["root", "trigger", "dropdown"],
	className: 'command-box',
	base: {
		root: {
			display: 'flex',
			position: 'relative',
			alignSelf: 'start',
		},
		dropdown: {
			width: "100%",
			backgroundColor: { base: 'white/50', _osDark: 'black/50' },
			position: "absolute",
			borderRadius: cornerRadius,
			outline: '1px solid',
			outlineColor: { base: 'neutral.100', _osDark: 'neutral.700' },
			top: 0,
			left: 0,
			zIndex: 1000,
			boxShadow: 'lg',
			boxShadowColor: { base: 'neutral.500' },
			backdropFilter: 'auto',
			backdropBlur: 'xs',
		},
	},
	variants: {
		open: {
			true: {
				dropdown: { visibility: 'visible' }
			},
			false: {
				dropdown: { visibility: 'collapse' }
			}
		}
	}
})

export const CommandBoxTriggerRecipe = css({
	px: 3,
	py: 2,
	width: '100%',
	textAlign: 'left',
	fontSize: 'sm',
	borderRadius: cornerRadius,
	color: { base: 'gray.500', _osDark: 'gray.400' },
	outline: '1px solid',
	outlineColor: { base: 'gray.300', _osDark: 'gray.800' },
	backgroundColor: { base: 'white/70', _osDark: 'gray.900/70' },
	_hover: { outlineColor: { base: 'gray.400/70', _osDark: 'gray.500/70' } },
})

export const CommandBoxContentRecipe = css({
	paddingY: 2,
	paddingX: 3,
})