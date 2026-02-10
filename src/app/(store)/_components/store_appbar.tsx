'use client'

import clsx from 'clsx'
import { sva } from 'panda/css'
import { Button, CommandBoxInput, Group, InputAddon, Logo } from '@/components'
import { CommandBox } from '@/components/molecules/command-box/command-box'
import { CommandBoxContent } from '@/components/molecules/command-box/components/command-box-content'
import { IconSearch } from '@tabler/icons-react'

const styles = sva({
	slots: ['root', 'commandBox'],
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
			borderBottom: '1px solid',
			borderBlockColor: { base: 'gray.400', _osDark: 'gray.700' },
			backgroundColor: {
				base: 'gray.50',
				_osDark: 'gray.950',
			},
		},
		commandBox: {
			display: 'none',
			xl: {
				display: 'block',
				width: '1/3',
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
				<Button variant="solid">Iniciar Sesión</Button>
			</Group>
		</div>
	)
}
