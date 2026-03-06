import { Slideshow, Typography } from '@/components'
import { css } from 'panda/css'
import { LandingCategories } from './_components/page/landing-categories'

export default function HomePage() {
	return (
		<div
			className={css({
				display: 'flex',
				flexDirection: 'column',
				gap: 8,
			})}
		>
			<Slideshow images={['/slide1.png']} />
			<LandingCategories />
			<Typography
				variant="title2"
				emphasized
			>
				✨Destacados
			</Typography>
		</div>
	)
}
