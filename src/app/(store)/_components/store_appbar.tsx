'use client'

import clsx from 'clsx'
import { sva } from 'panda/css'
import { Button, ButtonIcon, CommandBoxInput, Group, InputAddon, Logo } from '@/components'
import { CommandBox } from '@/components/molecules/command-box/command-box'
import { CommandBoxContent } from '@/components/molecules/command-box/components/command-box-content'
import { IconSearch, IconShoppingCart } from '@tabler/icons-react'
import Link from 'next/link'

const styles = sva({
	slots: ['root', 'commandBox', 'shoppingCartButton'],
	base: {
		root: {
			display: 'flex',
			flexWrap: 'nowrap',
			alignItems: 'center',
			justifyContent: 'space-between',
			flexDirection: 'row',
			position: 'sticky',
			top: '0',
			zIndex: '100',
			paddingY: 4,
			paddingX: 8,
			gap: '4',
			backgroundColor: {
				base: 'white',
				_osDark: 'black',
			},
			borderBottom: '1px solid',
			borderColor: {
				base: 'neutral.100',
				_osDark: 'neutral.900',
			},
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
		<div className={clsx(classes.root, className)}>
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
				<Link href="/register">
					<Button
						variant="solid"
						rounded="full"
					>
						Registrarse
					</Button>
				</Link>
			</Group>
		</div>
	)
}
