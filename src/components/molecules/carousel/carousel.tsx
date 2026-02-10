import { CarouselRecipe } from "./carousel.recipes"

interface CarouselProps {
    children: React.ReactNode
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
    const styles = CarouselRecipe()

    return <div className={styles.root}>
        <div className={styles.rail}>
            {children}
        </div>
    </div>
}