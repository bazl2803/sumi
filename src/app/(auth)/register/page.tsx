'use client'

import { Button, Field, Input, Logo, Separator, Typography } from '@/components'
import { SocialLogin } from '../_components/social-login'
import { signUpEmailAction } from '../_actions/signUpWithEmail'
import { useActionState } from 'react'
import { css, sva } from 'panda/css'

const RegisterPageStyles = sva({
	slots: ['root', 'form'],
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			padding: 6,
			rowGap: 4,
		},
		form: {
			display: 'flex',
			flexDirection: 'column',
			rowGap: 6,
		},
	},
})

const INITIAL_STATE = {
	success: false,
	message: '',
}

export default function RegisterPage() {
	const [state, action, isPending] = useActionState(
		signUpEmailAction,
		INITIAL_STATE,
	)

	const styles = RegisterPageStyles()

	return (
		<div className={styles.root}>
			<Logo />
			<Typography
				variant="title2"
				emphasized
			>
				Crear cuenta
			</Typography>

			<form
				className={styles.form}
				action={action}
			>
				<Field>
					<Input
						name="name"
						placeholder="Nombre"
					/>
				</Field>

				<Field>
					<Input
						name="email"
						placeholder="Email"
						type="email"
					/>
				</Field>

				<Field>
					<Input
						name="password"
						placeholder="Contraseña"
						type="password"
					/>
				</Field>

				<Field>
					<Input
						name="confirmPassword"
						placeholder="Confirmar contraseña"
						type="password"
					/>
				</Field>

				<Button
					type="submit"
					rounded="full"
					disabled={isPending}
				>
					{isPending ? 'Registrando...' : 'Registrarse'}
				</Button>
			</form>

			<div
				className={css({
					display: 'flex',
					flexWrap: 'wrap',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 1,
				})}
			>
				<span>¿Ya tienes una cuenta?</span>
				<Button variant="link">Inicia sesión</Button>
			</div>

			<Separator>o</Separator>

			<SocialLogin />
		</div>
	)
}
