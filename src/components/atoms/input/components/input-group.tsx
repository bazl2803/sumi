import { InputGroupRecipe } from "../input.recipes"

interface InputGroupProps extends React.ComponentPropsWithRef<'div'> {
	children: React.ReactNode
}

export const InputGroup: React.FC<InputGroupProps> = (props) => {
	return (
		<div
			className={InputGroupRecipe}
			{...props}
		/>
	)
}
