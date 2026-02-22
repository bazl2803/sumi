import { Button, ButtonIcon } from '@/components'
import { signInSocial } from '../_actions/signInSocial'
import { css } from 'panda/css'
import Image from 'next/image'

const styles = css({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'stretch',
	rowGap: 4,
	width: 'full',
})

export const SocialLogin = () => {
	return (
		<form
			className={styles}
			action={signInSocial}
		>
			<Button
				variant="outline"
				type="submit"
			>
				<Image
					src="/icons8-google.svg"
					alt="Google"
					width={20}
					height={20}
				/>
				Continuar con Google
			</Button>
		</form>
	)
}
