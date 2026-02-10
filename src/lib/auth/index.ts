import { betterAuth } from 'better-auth'
import { mongodbAdapter } from 'better-auth/adapters/mongodb'
import { getDb } from '../mongo'

const db = await getDb()

export const auth = betterAuth({
    database: mongodbAdapter(db),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }
    },
    advanced: {
        cookiePrefix: 'sumi_auth'
    },
    trustedOrigins: ['http://localhost:3000']
})