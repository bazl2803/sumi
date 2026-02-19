import React from 'react'
import { css } from 'panda/css'
import { FieldLabel } from './components/field-label'
import { FieldDescription } from './components/field-description'

// Props
interface FieldProps extends React.ComponentProps<'div'> {}

// Styles
const FieldStyles = css({
	display: 'flex',
	flexDirection: 'column',
	gap: '0.5rem',
})

export const Field = ({ children }: FieldProps) => {
	return <div className={FieldStyles}>{children}</div>
}

Field.Label = FieldLabel
Field.Description = FieldDescription
