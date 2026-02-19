import { Button, ButtonIcon } from '@/components'
import { signInSocial } from '../_actions/signInSocial'
import { IconBrandGoogle } from '@tabler/icons-react'

export const SocialLogin = () => {
	return (
		<form action={signInSocial}>
			<Button
				variant="outline"
				rounded="full"
				type="submit"
			>
				<ButtonIcon icon={IconBrandGoogle} />
				Continuar con Google
			</Button>
		</form>
	)
}
