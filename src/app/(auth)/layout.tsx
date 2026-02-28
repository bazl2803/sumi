'use client'
import type { ReactNode } from 'react'
import { sva } from 'panda/css'
import Image from 'next/image'
import {Separator} from "@/components";
import {SocialLogin} from "@/app/(auth)/_components/social-login";

type LayoutProps = {
	children: ReactNode
}

const AuthLayoutStyles = sva({
	slots: ['root', 'image', 'form'],
	base: {
		root: {
			lg: {
				display: 'grid',
				gridTemplateColumns: '1fr 480px',
				maxWidth: 'screen',
				maxHeight: 'screen',
				overflow: 'hidden',
			},
		},
		image: {
			display: 'none',
			lg: {
				display: 'block',
				gridColumn: '1',
				width: 'full',
				height: 'full',
				objectFit: 'cover',
				objectPosition: 'center',
			},
		},
		form: {
			display: 'flex',
			flexDirection: 'column',
			rowGap: 4,
			gridColumn: '2',
			padding: 8,
			lg: {
				overflowY: 'auto',
				scrollbarWidth: 'none',
				'&::-webkit-scrollbar': {
					display: 'none',
				},
			},
		},
	},
})

export default function AuthLayout({ children }: LayoutProps) {
	const styles = AuthLayoutStyles()

	return (
		<div className={styles.root}>
			<Image
				src={'/auth-bg.png'}
				alt="Background"
				className={styles.image}
				sizes="(min-width: 480px) 100vw, 1280px"
				priority
				width={100}
				height={100}
			/>
			<div className={styles.form}>
				{children}

				<Separator>o</Separator>

				<SocialLogin />
			</div>
		</div>
	)
}
