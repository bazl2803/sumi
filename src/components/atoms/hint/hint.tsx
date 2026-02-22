'use client'

import clsx from 'clsx'
import { HintRecipe } from './hint.recipe'
import { TypographyRecipe } from '../typography/typography.recipes'

interface HintProps extends React.ComponentPropsWithRef<'small'> {
	hidden?: boolean
	error?: boolean
}

export const Hint = ({ className, hidden, error, ...props }: HintProps) => (
	<small
		{...props}
		className={clsx(
			TypographyRecipe({ variant: 'footnote' }),
			HintRecipe({ hidden, error }),
			className
		)}
	/>
)
