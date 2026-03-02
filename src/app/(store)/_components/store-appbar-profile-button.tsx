'use client'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import {
	Button,
	Dropdown,
	DropdownContent,
	DropdownItem,
	DropdownTrigger,
} from '@/components'
import { IconDoorExit, IconLayoutDashboard } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

export const StoreAppbarProfileButton = async () => {
	const router = useRouter()

	const session = await auth.api.getSession({
		headers: await headers(),
	})

	if (!session) {
		return <Button>Iniciar Sesión</Button>
	}

	return (
		<Dropdown>
			<DropdownTrigger>
				<Button>{session.user.name}</Button>
			</DropdownTrigger>
			<DropdownContent>
				<DropdownItem
					icon={IconLayoutDashboard}
					label="Administrar"
					onClick={() => router.push('/manage/dashboard')}
				/>
				<DropdownItem
					icon={IconDoorExit}
					label="Cerrar Sesión"
				/>
			</DropdownContent>
		</Dropdown>
	)
}
