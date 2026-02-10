import { FieldRecipe, Textbox } from '@/components'
import { Hint } from '@/components/atoms/hint/hint'
import clsx from 'clsx'
import { css } from 'panda/css'

interface FieldProps extends React.ComponentPropsWithRef<'div'> {
	hint?: string
	label?: string
	error?: string
	children: React.ReactElement<typeof Textbox>
}

export const Field: React.FC<FieldProps> = ({
	hint,
	label,
	error,
	children,
	className,
	...props
}) => {
	const styles = FieldRecipe()

	return (
		<div
			className={clsx(styles.root, className)}
			{...props}
		>
			{label && <label className={styles.label}>{label}</label>}
			{children}
			{hint && !error && <Hint>{hint}</Hint>}
			{error && <Hint error>{error}</Hint>}
		</div>
	)
}
