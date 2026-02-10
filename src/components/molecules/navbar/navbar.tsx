import React from "react";
import { NavbarItem } from "@/components";
import { NavbarRecipe } from "@/components/molecules/navbar/navbar.recipes";
import clsx from "clsx";

interface NavbarProps extends React.ComponentPropsWithRef<'nav'> {
    children:
    | React.ReactElement<typeof NavbarItem>
    | React.ReactElement<typeof NavbarItem>[]
}

export const Navbar = ({ className, ...props }: NavbarProps) => {
    return (
        <nav {...props}
            className={clsx(NavbarRecipe, className)}
        />
    )
}