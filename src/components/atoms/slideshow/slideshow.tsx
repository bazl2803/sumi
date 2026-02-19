import { sva } from 'panda/css'
import React from 'react'
import Image from 'next/image'

interface SlideshowProps extends React.ComponentPropsWithRef<'div'> {
	images?: Array<string>
}

const SlideshowStyles = sva({
	slots: ['root', 'image', 'viewport'],
	className: 'slideshow',
	base: {
		root: {
			position: 'relative',
			width: 'full',
			overflow: 'hidden',
			borderRadius: '2xl',
			backgroundColor: {
				base: 'gray.100',
				_osDark: 'gray.800',
			},
		},
		viewport: {
			position: 'relative',
			aspectRatio: '1280/500',
			width: 'full',
		},
		image: {
			objectFit: 'cover',
			objectPosition: 'top',
		},
	},
})

export const Slideshow: React.FC<SlideshowProps> = ({ images, ...rest }) => {
	const styles = SlideshowStyles()

	return images ? (
		<div
			className={styles.root}
			{...rest}
		>
			<div className={styles.viewport}>
				<Image
					src={images[0]}
					alt="example"
					sizes="(max-width: 768px) 100vw, 1280px"
					fill
					className={styles.image}
				/>
			</div>
		</div>
	) : (
		<p>No items</p>
	)
}
