import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { css } from 'panda/css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Suministros Eléctricos',
	description: 'Lideres en Electricidad',
}

const styles = css({
	color: { base: 'black', _osDark: 'white' },
	boxSizing: 'border-box',
	maxWidth: 'screen',
	maxHeight: 'screen',
	backgroundColor: {
		base: 'white',
		_osDark: 'black',
	},
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es-sv">
			<body className={`${inter.className} ${styles}`}>{children}</body>
		</html>
	)
}
