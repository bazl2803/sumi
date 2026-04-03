'use client'
import React from "react";
import { SegmentContext } from "./segment-context";
import { SegmentRecipe } from "./segment.recipes";
import { cx } from "panda/css";
import { SegmentItem } from "./components/segment-item";

// --- Props ------------------------------------------------------------------
interface SegmentProps extends React.ComponentPropsWithRef<'div'> {
    defaultValue: string,
    fullWidth?: boolean
}

// --- JSX --------------------------------------------------------------------
export function Segment({ className, defaultValue, fullWidth, ...props }: SegmentProps) {
    const [active, setActive] = React.useState(defaultValue)

    return (
        <SegmentContext.Provider value={{ active, setActive }}>
            <div {...props} className={cx(
                'segment',
                SegmentRecipe({ fullWidth }),
                className
            )} />
        </SegmentContext.Provider>
    )
}

Segment.Item = SegmentItem