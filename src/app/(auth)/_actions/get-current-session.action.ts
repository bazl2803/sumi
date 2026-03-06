'use server'

import 'server-only'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

export const getCurrentSession = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    })

    return session
}