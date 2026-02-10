import { Icon as TablerIcon } from '@tabler/icons-react'
import { DropdownItemRecipe } from '../dropdown.recipes'

interface DropdownItemProps extends React.ComponentProps<'button'> {
	icon: TablerIcon
	label: string
	destructive?: boolean
}

export const DropdownItem = ({ icon: Icon, label, destructive, ...props }: DropdownItemProps) => {
	return (
		<button
			{...props}
			className={DropdownItemRecipe({ destructive })}
		>
			{Icon && <Icon size={20} />}
			<span>{label}</span>
		</button>
	)
}
