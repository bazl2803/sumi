'use client'
import { DropdownContentRecipe } from '../dropdown.recipes'
import { useDropdown } from '../dropdown-context'

interface DropdownContentProps extends React.ComponentProps<'div'> {}

export const DropdownContent = ({ ...props }: DropdownContentProps) => {
	const { open } = useDropdown()
	return (
		<div
			{...props}
			className={DropdownContentRecipe({ open })}
		/>
	)
}
