'use client'

import { SignupButton } from './signup-button'
import { ProfileButton } from './profile-button'
import { authClient } from '@/lib/auth/auth-client'
import {
	Dropdown,
	DropdownContent,
	DropdownItem,
	DropdownTrigger,
} from '@/components'
import {
	IconDoorExit,
	IconLayout2,
	IconMapPin2,
	IconReceipt2,
} from '@tabler/icons-react'
import Link from 'next/link'

export const AccountControl = () => {
	// Get current session
	const { data: session } = authClient.useSession()

	// If session is null, return SignupButton
	if (!session) return <SignupButton />

	return (
		<Dropdown>
			<DropdownTrigger>
				<ProfileButton user={session.user} />
			</DropdownTrigger>
			<DropdownContent>
				<Link href="/manage/dashboard">
					<DropdownItem
						icon={IconLayout2}
						label="Administración"
					/>
				</Link>
				<DropdownItem
					icon={IconMapPin2}
					label="Direcciones"
				/>
				<DropdownItem
					icon={IconReceipt2}
					label="Pedidos"
				/>
				<DropdownItem
					destructive
					icon={IconDoorExit}
					label="Cerrar sesión"
				/>
			</DropdownContent>
		</Dropdown>
	)
}
