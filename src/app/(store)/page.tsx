import { Slideshow } from '@/components'
import { css } from 'panda/css'

export default function HomePage() {
	return (
		<div
			className={css({
				display: 'flex',
				flexDirection: 'column',
				gap: 4,
			})}
		>
			<Slideshow images={['/slide1.png']} />
		</div>
	)
}
