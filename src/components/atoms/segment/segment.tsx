'use client'
import React from 'react'
import { SegmentContainerRecipe, SegmentItemRecipe } from './segment.recipes'

interface SegmentOption {
	label: string
	value: string
}

interface SegmentProps {
	options: SegmentOption[]
	value: string
	onChange: (value: string) => void
}

export const Segment: React.FC<SegmentProps> = ({ options, value, onChange }) => {
	return (
		<div className={SegmentContainerRecipe()}>
			{options.map((option) => (
				<button
					key={option.value}
					type="button"
					onClick={() => onChange(option.value)}
					className={SegmentItemRecipe({ active: value === option.value })}
				>
					{option.label}
				</button>
			))}
		</div>
	)
}
