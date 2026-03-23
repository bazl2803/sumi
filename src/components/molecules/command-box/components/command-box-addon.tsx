import React from "react";
import {css, cx} from "panda/css";

interface CommandBoxAddonProps
    extends React.ComponentPropsWithRef<'div'> {
}

const CommandBoxStyles = css({
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
})

export const CommandBoxAddon = ({className, ...props}: CommandBoxAddonProps) => {
    return (
        <div {...props} className={cx('command-box-addon', CommandBoxStyles, className)}/>
    )
}
