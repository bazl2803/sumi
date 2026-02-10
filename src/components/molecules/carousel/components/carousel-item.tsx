import clsx from "clsx"
import { CarouselItemRecipe } from "../carousel.recipes"

interface CarouselItemProps extends React.ComponentPropsWithRef<'div'> {
    align?: 'start' | 'center' | 'end'
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ className, align, ...props }) =>
    <div className={clsx(CarouselItemRecipe({ align }), className)} {...props} />
