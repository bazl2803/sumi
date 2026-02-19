import { css, cx } from 'panda/css'
import { CarouselRecipe } from './carousel.recipes'
import { SystemStyleObject } from 'panda/types'

interface CarouselProps {
	children: React.ReactNode
	className?: string
	css?: SystemStyleObject
}

export const Carousel: React.FC<CarouselProps> = ({ children, className, css: cssProps }) => {
	const styles = CarouselRecipe()

	return (
		<div className={cx(styles.root, css(cssProps), className)}>
			<div className={styles.rail}>{children}</div>
		</div>
	)
}
