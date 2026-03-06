import { Icon as TablerIcon } from '@tabler/icons-react'
import { DropdownItemRecipe } from '../dropdown.recipes'
import { useDropdown } from '../dropdown-context'

interface DropdownItemProps extends React.ComponentProps<'button'> {
	icon: TablerIcon
	label: string
	destructive?: boolean
}

export const DropdownItem = ({
	icon: Icon,
	label,
	destructive,
	onClick,
	...props
}: DropdownItemProps) => {
	const { setOpen } = useDropdown()
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setOpen(false)
		if (onClick) {
			onClick(e)
		}
	}
	return (
		<button
			{...props}
			onClick={handleClick}
			className={DropdownItemRecipe({ destructive })}
		>
			{Icon && <Icon size={20} />}
			<span>{label}</span>
		</button>
	)
}
