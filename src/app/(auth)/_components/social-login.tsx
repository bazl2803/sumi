'use client'

import {Button, ButtonIcon} from '@/components'
import {css} from 'panda/css'
import Image from 'next/image'
import {IconBrandAppleFilled} from '@tabler/icons-react'
import React from "react";
import {signInSocialAction} from "@/app/(auth)/_actions/signin-social.action";

const styles = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    rowGap: 4,
    width: 'full',
})

export const SocialLogin = () => {
    const [isPending, startTransition] = React.useTransition()

    const handleSignIn = (provider: 'google' | 'microsoft') => {
        startTransition(() => {
            signInSocialAction(provider)
        })
    }

    return (
        <div className={styles}>
            <Button
                variant="outline"
                onClick={() => handleSignIn('google')}
            >
                <Image
                    src="/icons8-google.svg"
                    alt="Google"
                    width={20}
                    height={20}
                />
                Continuar con Google
            </Button>

            <Button
                variant="outline"
                onClick={() => handleSignIn('microsoft')}
            >
                <Image
                    src="/icons8-microsoft.svg"
                    alt="Microsoft"
                    width={20}
                    height={20}
                />
                Continuar con Microsoft
            </Button>

            <Button
                variant="outline"
            >
                <ButtonIcon icon={IconBrandAppleFilled}/>
                Continuar con Apple
            </Button>
        </div>
    )
}
