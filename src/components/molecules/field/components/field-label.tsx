import { css } from 'panda/css'

// Props
interface FieldLabelProps extends React.ComponentProps<'label'> {}

// Styles
const FieldLabelStyles = css({
	fontSize: 'sm',
	fontWeight: 'medium',
})

export const FieldLabel = ({ ...props }: FieldLabelProps) => {
	return (
		<label
			className={FieldLabelStyles}
			{...props}
		/>
	)
}
