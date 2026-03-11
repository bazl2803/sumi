import { Slideshow, Typography } from '@/components'
import { css } from 'panda/css'
import { LandingCategories } from './_components/landing-categories'
import { LandingServices } from '@/app/(store)/_components/landing-services'

export default function HomePage() {
	return (
		<div
			className={css({
				display: 'flex',
				flexDirection: 'column',
				gap: 4,
			})}
		>
			<div
				className={css({
					paddingInline: 4,
				})}
			>
				<Slideshow images={['/slide1.png', '/slide1.png']} />
			</div>
			<LandingServices />
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
