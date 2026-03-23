import { Avatar, Button } from '@/components'
import { User } from 'better-auth'

// --- Types -------------------------------------------------------------------
interface ProfileButtonProps {
	user: User
}

// --- Component ---------------------------------------------------------------
export const ProfileButton = ({ user }: ProfileButtonProps) => {
	return (
		<Button
			rounded={'full'}
			variant={'subtle'}
		>
			<Button.Addon>
				<Avatar
					src={user.image!}
					fallback={user.name![0]}
				/>
			</Button.Addon>
			<Button.Label>{user.name}</Button.Label>
		</Button>
	)
}
