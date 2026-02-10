'use client'
import { useDropdown } from '../dropdown-context'
import { DropdownTriggerRecipe } from '../dropdown.recipes'

interface DropdownTriggerProps extends React.ComponentProps<'div'> {}

export const DropdownTrigger = ({ ...props }: DropdownTriggerProps) => {
	const { open, setOpen } = useDropdown()
	return (
		<div
			{...props}
			className={DropdownTriggerRecipe({ open })}
			onClick={() => setOpen(true)}
		/>
	)
}
