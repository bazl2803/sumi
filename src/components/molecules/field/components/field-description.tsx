import { css, cx } from 'panda/css'

// Props
interface FieldDescriptionProps extends React.ComponentProps<'p'> {}

// Styles
const FieldDescriptionStyles = css({
	fontSize: 'sm',
	color: 'neutral.500',
})

export const FieldDescription = ({ className, ...props }: FieldDescriptionProps) => {
	return (
		<p
			className={cx(FieldDescriptionStyles, className)}
			{...props}
		/>
	)
}
