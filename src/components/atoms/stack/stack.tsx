import { css, cx } from 'panda/css'
import { SystemStyleObject } from 'panda/types'
import { StackRecipe } from './stack.recipes'

interface StackProps extends React.ComponentPropsWithRef<'div'> {
	css?: SystemStyleObject
}

export const Stack: React.FC<StackProps> = ({ className, css: cssProp, ...props }) => {
	return (
		<div
			className={cx(css(StackRecipe, cssProp), className)}
			{...props}
		/>
	)
}
