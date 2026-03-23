import React from "react";
import {cva, cx} from "panda/css";

interface CommandBoxProps
    extends React.ComponentPropsWithRef<'input'> {
}

const CommandBoxStyles = cva({
    base: {
        width: 'full',
        outline: 'none',
    }
})

export const CommandBoxInput = ({className, ...props}: CommandBoxProps) => {
    return <input className={cx("command-box-input", CommandBoxStyles(), className)} {...props}/>
}
