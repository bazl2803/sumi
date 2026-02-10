'use client'

import { InputAddon } from '@/components/atoms/input/components/input-addon'
import { InputGroup } from '@/components/atoms/input/components/input-group'
import { Input } from '@/components/atoms/input/input'
import { IconSearch } from '@tabler/icons-react'
import { useCommandBoxContext } from '../command-box-context'
import React from 'react'

interface CommandBoxInputProps extends React.ComponentPropsWithoutRef<'input'> {}

export const CommandBoxInput = ({ className, ...props }: CommandBoxInputProps) => {
	const { inputValue, setInputValue, setPlaceholder, open } = useCommandBoxContext()
	React.useEffect(() => {
		setPlaceholder(props.placeholder || '')
	}, [])

	return (
		<>
			{open && (
				<Input
					{...props}
					value={inputValue}
					onChange={(e) => {
						setInputValue(e.target.value)
						setPlaceholder(props.placeholder!)
					}}
					type="search"
					autoFocus
				/>
			)}
		</>
	)
}
