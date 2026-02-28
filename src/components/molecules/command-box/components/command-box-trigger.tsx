import { CommandBoxTriggerRecipe, Group } from '@/components'
import { useCommandBoxContext } from '../command-box-context'
import { IconSearch } from '@tabler/icons-react'
import { cx } from 'panda/css'

export const CommandBoxTrigger = ({ className }: { className?: string }) => {
	const { open, setOpen, inputValue, placeholder } = useCommandBoxContext()

	return (
		<>
			{!open && (
				<button
					className={cx(CommandBoxTriggerRecipe, className)}
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
