'use client'

import React from 'react'
import { SurfaceRecipe } from '@/components/atoms/surface/surface.recipes'
import { ListRecipe } from './list.recipe'
import { cx } from 'panda/css'
import { ListItem } from './components/list-item'

interface ListProps extends React.ComponentPropsWithRef<'ul'> {
	variant?: 'solid' | 'outline'
}

export function List({ className, variant, ...props }: ListProps) {
	return (
		<ul
			{...props}
			className={cx(
				'list',
				ListRecipe,
				SurfaceRecipe({ variant }),
				className
			)}
		/>
	)
}

List.Item = ListItem
