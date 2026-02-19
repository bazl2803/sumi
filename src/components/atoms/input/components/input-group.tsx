import { cx } from 'panda/css'
import { InputGroupRecipe, InputVariantsRecipe } from '../input.recipes'

interface InputGroupProps extends React.ComponentPropsWithRef<'div'> {
	children: React.ReactNode
	variant?: 'subtle' | 'filled' | 'outlined'
	shape?: 'rounded' | 'square' | 'pill'
}

export const InputGroup: React.FC<InputGroupProps> = ({
	variant,
	shape,
	className,
	...props
}) => {
	return (
		<div
			className={cx(
				InputGroupRecipe,
				InputVariantsRecipe({ variant, shape }),
				className,
			)}
			{...props}
		/>
	)
}
