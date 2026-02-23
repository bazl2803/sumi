import React from 'react'
import { css, cx } from 'panda/css'
import { Hint } from '@/components/atoms/hint/hint'

// Props
interface FieldProps extends React.ComponentProps<'div'> {
	label?: string
	description?: string
	errors?: string[]
}

// Styles
const FieldStyles = css({
	display: 'flex',
	flexDirection: 'column',
	gap: '0.5rem',
})

const FieldLabelStyles = css({
	fontSize: 'sm',
	fontWeight: 'medium',
})

export const Field = ({
	className,
	children,
	label,
	description,
	errors,
	...props
}: FieldProps) => {
	return (
		<div
			className={cx(FieldStyles, className)}
			{...props}
		>
			{label && <label className={FieldLabelStyles}>{label}</label>}
			{children}
			{(description || !errors?.length) && <Hint>{description}</Hint>}
			{errors &&
				errors.map((error, i) => (
					<Hint
						key={i}
						error
					>
						{error}
					</Hint>
				))}
		</div>
	)
}
