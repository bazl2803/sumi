import { Carousel, CarouselItem, Stack, Typography } from '@/components'
import { getAllCategories } from '@/features/categories/actions/getAllCategories'
import Image from 'next/image'
import { css } from 'panda/css'
import { flex } from 'panda/patterns'

export const LandingCategories = async () => {
	// Get Categories from MongoDB
	const categories = await getAllCategories()

	// Map Categories to Carousel Items
	return (
		<div
			className={flex({
				direction: 'column',
				gap: 4,
			})}
		>
			<Typography
				variant="title2"
				emphasized
			>
				Categorias
			</Typography>

			<Carousel>
				{categories.map((category) => (
					<CarouselItem key={category._id.toString()}>
						<Stack
							css={{
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Image
								className={css({
									minWidth: 24,
									minHeight: 24,
									width: 24,
									height: 24,
									borderRadius: 'xl',
								})}
								src={category.thumbnail}
								alt={category.name}
								width={200}
								height={200}
							/>
							<Typography variant="caption1">{category.name}</Typography>
						</Stack>
					</CarouselItem>
				))}
			</Carousel>
		</div>
	)
}
