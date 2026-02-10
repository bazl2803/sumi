import { TablerIcon } from '@tabler/icons-react'
import { ButtonIconRecipe } from '../button.recipes'

interface ButtonIconProps {
	icon: TablerIcon
	size?: number
}

export const ButtonIcon = ({ icon: Icon, size = 20 }: ButtonIconProps) => {
	return (
		<div className={ButtonIconRecipe}>
			<Icon size={size} />
		</div>
	)
}
