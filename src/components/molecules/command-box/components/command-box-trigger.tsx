import { CommandBoxTriggerRecipe, Group } from '@/components'
import { useCommandBoxContext } from '../command-box-context'
import { IconSearch } from '@tabler/icons-react'

export const CommandBoxTrigger = () => {
	const { open, setOpen, inputValue, placeholder } = useCommandBoxContext()

	return (
		<>
			{!open && (
				<button
					className={CommandBoxTriggerRecipe}
					onClick={() => setOpen(true)}
				>
					<Group>
						<IconSearch size={18} />
						{inputValue || placeholder}
					</Group>
				</button>
			)}
		</>
	)
}
