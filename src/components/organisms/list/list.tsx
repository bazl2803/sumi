'use client'

import React from 'react'
import clsx from 'clsx'
import { SurfaceRecipe } from '@/components/atoms/surface/surface.recipes'
import { ListItemRecipe, ListRecipe } from './list.recipe'

interface ListProps extends React.ComponentPropsWithRef<'ul'> {
	variant?: 'solid' | 'outline'
}

export const List: React.FC<ListProps> = ({ className, variant, ...props }) => {
	return (
		<ul
			className={clsx(ListRecipe, SurfaceRecipe({ variant }), className)}
			{...props}
		/>
	)
}
