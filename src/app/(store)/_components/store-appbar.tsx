'use client'

import {
	Button,
	ButtonIcon,
	CommandBox,
	CommandBoxInput,
	Group,
	InputAddon,
	Logo,
} from '@/components'
import { CommandBoxContent } from '@/components/molecules/command-box/components/command-box-content'
import { IconSearch, IconShoppingCart } from '@tabler/icons-react'
import { cx, sva } from 'panda/css'
import { AccountControl } from './account-control'

const styles = sva({
	slots: ['root', 'commandBox', 'wrapper', 'shoppingCartButton'],
	base: {
		root: {
			display: 'flex',
			flexWrap: 'nowrap',
			alignItems: 'top',
			flexDirection: 'row',
			position: 'sticky',
			top: '0',
			zIndex: '100',
			paddingBlock: 4,
			backgroundColor: {
				base: 'white/85',
				_osDark: 'black/85',
			},
			gap: 4,
		},
		commandBox: {
			display: 'none',
			lg: {
				display: 'block',
				width: 'md',
			},
		},
		shoppingCartButton: {
			display: 'none',
			lg: {
				display: 'block',
			},
		},
		wrapper: {
			display: 'flex',
			flexWrap: 'nowrap',
			alignItems: 'center',
			justifyContent: 'space-between',
			gap: 4,
			paddingInline: 4,
			m: 'auto',
			w: 'full',
			maxW: '7xl',
		},
	},
})

export const StoreAppbar = ({ className }: { className?: string }) => {
	const classes = styles()

	return (
		<div
			className={cx(classes.root, className)}
			style={{ backdropFilter: 'blur(10px)' }}
		>
			<div className={classes.wrapper}>
				<Logo />

				<CommandBox className={classes.commandBox}>
					<CommandBox.InputGroup>
						<InputAddon>
							<IconSearch size={18} />
						</InputAddon>

						<CommandBoxInput placeholder="¿Qué es lo que buscas?" />

						<InputAddon>Alt+P</InputAddon>
					</CommandBox.InputGroup>
					<CommandBoxContent />
				</CommandBox>

				<Group>
					<Button
						className={classes.shoppingCartButton}
						variant="subtle"
						rounded="full"
						size="icon"
					>
						<ButtonIcon icon={IconShoppingCart} />
					</Button>

					<AccountControl />
				</Group>
			</div>
		</div>
	)
}
