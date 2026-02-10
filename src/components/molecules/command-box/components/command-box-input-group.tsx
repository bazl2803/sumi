import { InputGroup } from '@/components/atoms/input/components/input-group'

interface CommandBoxInputGroupProps {
	children: React.ReactNode
}

export const CommandBoxInputGroup = ({ children }: CommandBoxInputGroupProps) => {
	return <InputGroup>{children}</InputGroup>
}
