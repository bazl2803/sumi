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
			backgroundColor: { base: 'neutral.100', _osDark: 'neutral.950' },
			position: "absolute",
			borderRadius: cornerRadius,
			outline: '1px solid',
			outlineColor: { base: 'neutral.200', _osDark: 'neutral.800' },
			top: 0,
			left: 0,
			zIndex: 1000,
			boxShadow: 'xl',
			boxShadowColor: { base: 'neutral.900' },
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
	color: { base: 'neutral.500', _osDark: 'neutral.400' },
	outline: '1px solid',
	outlineColor: { base: 'neutral.300', _osDark: 'neutral.800' },
	backgroundColor: { base: 'white/70', _osDark: 'neutral.900/70' },
	backdropFilter: 'auto',
	backdropBlur: 'xs',
	_hover: { outlineColor: { base: 'neutral.400/70', _osDark: 'neutral.500/70' } },
})

export const CommandBoxContentRecipe = css({
	paddingY: 2,
	paddingX: 3,
})