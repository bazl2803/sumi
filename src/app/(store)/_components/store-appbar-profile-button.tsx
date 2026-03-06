'use client'
import {
	Avatar,
	Button,
	Dropdown,
	DropdownContent,
	DropdownItem,
	DropdownTrigger,
} from '@/components'
import { IconDoorExit, IconLayoutDashboard } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth/auth-client'
import { SignOutAction } from '@/app/(auth)/_actions/signout.action'

// --- Component ---------------------------
export const StoreAppbarProfileButton = () => {
	const router = useRouter()

	const { data: session, refetch } = authClient.useSession()

	if (!session) {
		return (
			<Button
				rounded="full"
				onClick={() => router.push('/register')}
			>
				Iniciar Sesión
			</Button>
		)
	}

	return (
		<Dropdown>
			<DropdownTrigger>
				<Button
					variant="outline"
					rounded="full"
				>
					<Avatar
						src={session.user.image!}
						fallback={session.user.name![0]}
					/>
					{session.user.name}
				</Button>
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
					destructive
					onClick={async () => {
						await SignOutAction()
						await refetch()
					}}
				/>
			</DropdownContent>
		</Dropdown>
	)
}
