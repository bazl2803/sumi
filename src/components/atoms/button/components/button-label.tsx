'use client'

import { ButtonLabelRecipe } from "../button.recipes";
import { cx } from "panda/css";

interface ButtonLabelProps
    extends React.ComponentPropsWithRef<'span'> { }

export const ButtonLabel = ({ className, ...props }: ButtonLabelProps) => {
    return <span className={cx(ButtonLabelRecipe, className)} {...props} />;
};