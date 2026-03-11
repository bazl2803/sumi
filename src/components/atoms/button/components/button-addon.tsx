import React from "react";
import {css, cx} from "panda/css";

// --- Types ------------------------------------------------------------------
type ButtonAddonProps = React.ComponentPropsWithRef<'div'>

const styles = css({
    padding: 2
})

// --- Component --------------------------------------------------------------
export function ButtonAddon({className, ...props}: ButtonAddonProps) {
    return (
        <div {...props} className={cx('button-addon' ,styles, className)}/>
    )
}