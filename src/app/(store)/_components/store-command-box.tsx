import { CommandBox, Kbd, Typography } from '@/components'
import { IconSearch } from '@tabler/icons-react'
import React from 'react'
import { sva } from 'panda/css'
import Image from 'next/image'

export const StoreCommandBox: React.FC<React.ComponentPropsWithRef<'div'>> = ({
	className,
	...props
}) => {
	return (
		<CommandBox className={className}>
			<CommandBox.InputGroup>
				<CommandBox.Addon>
					<IconSearch size={16} />
				</CommandBox.Addon>
				<CommandBox.Input placeholder="What are you looking for?" />
				<CommandBox.Addon>
					<Kbd>Ctrl+F</Kbd>
				</CommandBox.Addon>
			</CommandBox.InputGroup>
			<CommandBox.Dropdown>
				<CommandBox.DropdownItemGroup label="Productos">
					<CommandBox.DropdownItem>
						<ProductResultCard />
					</CommandBox.DropdownItem>
					<CommandBox.DropdownItem>
						<ProductResultCard />
					</CommandBox.DropdownItem>
					<CommandBox.DropdownItem>
						<ProductResultCard />
					</CommandBox.DropdownItem>
					<CommandBox.DropdownItem>
						<ProductResultCard />
					</CommandBox.DropdownItem>
					<CommandBox.DropdownItem>
						<ProductResultCard />
					</CommandBox.DropdownItem>
					<CommandBox.DropdownItem>
						<ProductResultCard />
					</CommandBox.DropdownItem>
					<CommandBox.DropdownItem>
						<ProductResultCard />
					</CommandBox.DropdownItem>
				</CommandBox.DropdownItemGroup>
			</CommandBox.Dropdown>
		</CommandBox>
	)
}

const ProductResultStyles = sva({
	slots: ['root', 'image', 'name', 'price'],
	base: {
		root: {
			display: 'grid',
			gridTemplateColumns: 'auto 1fr',
			gridTemplateRows: 'auto auto',
			gap: 4,
		},
		image: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			gridRow: '1/3',
			aspectRatio: '1/1',
			backgroundColor: 'white',
			borderRadius: 6,
		},
		name: {
			gridColumn: '2',
			gridRow: '1',
		},
		price: {
			gridColumn: '2',
			gridRow: '2',
		},
	},
})

const ProductResultCard = () => {
	const styles = ProductResultStyles()

	return (
		<div className={styles.root}>
			{/*Image */}
			<div className={styles.image}>
				<Image
					src="/breaker.jpg"
					alt="Product"
					width={48}
					height={48}
				/>
			</div>

			{/*Name*/}
			<Typography
				variant="headline"
				className={styles.name}
			>
				Breaker
			</Typography>

			{/*Price*/}
			<Typography
				variant="subheadline"
				className={styles.price}
			>
				$6.90
			</Typography>
		</div>
	)
}
