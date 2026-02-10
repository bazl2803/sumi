'use client'
import clsx from 'clsx'
import Image from 'next/image'
import { css } from 'panda/css'

interface LogoProps {
	className?: string
}

export const Logo = ({ className }: LogoProps) => {
	return (
		<>
			{/* Light Logo */}
			<Image
				className={clsx(css({ display: 'block', h: 10, w: 'auto', _osDark: { display: 'none' } }), className)}
				src="/logo-light.svg"
				alt="Logo"
				width={100}
				height={100}
				priority
			/>

			{/* Dark Logo */}
			<Image
				className={clsx(css({ display: 'none', h: 10, w: 'auto', _osDark: { display: 'block' } }), className)}
				src="/logo-dark.svg"
				alt="Logo"
				width={100}
				height={100}
				priority
			/>
		</>
	)
}
