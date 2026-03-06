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
import { StoreAppbarProfileButton } from './store-appbar-profile-button'

const styles = sva({
	slots: ['root', 'commandBox', 'shoppingCartButton'],
	base: {
		root: {
			display: 'flex',
			flexWrap: 'nowrap',
			alignItems: 'top',
			justifyContent: 'space-between',
			flexDirection: 'row',
			position: 'sticky',
			top: '0',
			zIndex: '100',
			paddingBlock: 4,
			paddingInline: 8,
			backgroundColor: {
				base: 'white',
				_osDark: 'black',
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
	},
})

export const StoreAppbar = ({ className }: { className?: string }) => {
	const classes = styles()

	return (
		<div className={cx(classes.root, className)}>
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
				<StoreAppbarProfileButton />
			</Group>
		</div>
	)
}
