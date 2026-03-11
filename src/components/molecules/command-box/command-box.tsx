'use client'
import { css, cx } from 'panda/css'
import { CommandBoxRecipe } from './command-box.recipes'
import React from 'react'
import { CommandBoxContext } from './command-box-context'
import { CommandBoxTrigger } from './components/command-box-trigger'
import { CommandBoxInputGroup } from './components/command-box-input-group'
import { CommandBoxContent } from './components/command-box-content'

interface CommandBoxProps extends React.ComponentPropsWithoutRef<'div'> {}

export const CommandBox = ({
	className,
	children,
	...props
}: CommandBoxProps) => {
	// State
	const [open, setOpen] = React.useState(false)
	const [inputValue, setInputValue] = React.useState<string>('')
	const [placeholder, setPlaceholder] = React.useState<string>('')

	// Close dropdown on outside click
	clickOutside()

	// Get styles
	const styles = CommandBoxRecipe({ open })

	return (
		<CommandBoxContext.Provider
			value={{
				open,
				setOpen,
				inputValue,
				setInputValue,
				placeholder,
				setPlaceholder,
			}}
		>
			<div
				{...props}
				className={cx(css(styles.root), className)}
			>
				<CommandBoxTrigger className={styles.root} />
				<div className={styles.dropdown}>{children}</div>
			</div>
		</CommandBoxContext.Provider>
	)

	// Helpers
	function clickOutside() {
		React.useEffect(() => {
			const handleClickOutside = (event: MouseEvent) => {
				if (!event.target) return
				if (!(event.target instanceof HTMLElement)) return
				if (event.target.closest('[data-dropdown]')) return
				setOpen(false)
			}
			document.addEventListener('mousedown', handleClickOutside)
			return () => {
				document.removeEventListener('mousedown', handleClickOutside)
			}
		}, [])
	}
}

CommandBox.InputGroup = CommandBoxInputGroup
CommandBox.Content = CommandBoxContent
