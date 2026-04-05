'use client'

import React from 'react'
import {Button, Field, Hint, Input, Logo, Typography} from '@/components'
import {css, sva} from 'panda/css'
import {signUpEmailAction} from '../_actions/signup-email.action'
import { SignUpState } from '../_types/signup.types'

// --- Styles -----------------------------------------------------------------
const RegisterPageStyles = sva({
    slots: ['root', 'header', 'form'],
    base: {
        root: {
            display: 'flex',
            flexDirection: 'column',
            rowGap: 4,
            maxWidth: '480px',
            width: 'full',
            margin: 'auto',
        },
        header: {
            display: 'flex',
            flexDirection: 'column',
            rowGap: 6,
            paddingY: 4,
            alignItems: 'start',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            rowGap: 4,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none',
            },
        },
    },
})

// --- Types ------------------------------------------------------------------
const initialState: SignUpState = {
    success: false,
    message: '',
    errors: undefined,
    data: null,
}

// --- Component --------------------------------------------------------------
export default function RegisterPage() {
    const [state, action] = React.useActionState(signUpEmailAction, initialState)
    const styles = RegisterPageStyles()

    return (
        <div className={styles.root}>
            <header className={styles.header}>
                <Logo/>
                <Typography
                    variant="title1"
                    emphasized
                >
                    Crear Cuenta
                </Typography>

                <div
                    className={css({
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: 1,
                    })}
                >
                    <span>¿Ya tienes una cuenta?</span>
                    <Button variant="link">
                        <b>Inicia Sesión</b>
                    </Button>
                </div>
            </header>

            <form
                className={styles.form}
                action={action}
            >
                <Field>
                    <Input
                        name="name"
                        placeholder="Nombre"
                    />
                    {state.errors?.name && <Hint error>{state.errors?.name}</Hint>}
                </Field>

                <Field>
                    <Input
                        name="email"
                        placeholder="Email"
                        type="email"
                    />
                    {state.errors?.email && <Hint error>{state.errors?.email}</Hint>}
                </Field>

                <Field>
                    <Input
                        name="password"
                        placeholder="Contraseña"
                        type="password"
                    />
                    {state.errors?.password && <Hint error>{state.errors?.password}</Hint>}
                </Field>

                <Field>
                    <Input
                        name="confirmPassword"
                        placeholder="Confirmar contraseña"
                        type="password"
                    />
                    {state.errors?.confirmPassword && <Hint error>{state.errors?.confirmPassword}</Hint>}
                </Field>

                <Button
                    type="submit"
                    rounded="full"
                >
                    Continuar
                </Button>
            </form>
        </div>
    )
}
