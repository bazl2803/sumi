'use client'
import React from "react";
import { useSegment } from "../segment-context";
import { SegmentItemRecipe } from "../segment.recipes";
import { cx } from "panda/css";

// --- Props ------------------------------------------------------------------
interface SegmentItemProps extends React.ComponentPropsWithRef<'div'> {
    value: string
}

// --- JSX --------------------------------------------------------------------
export function SegmentItem({ value, ...props }: SegmentItemProps) {
    const { active, setActive } = useSegment()

    return (
        <div
            {...props}
            className={cx(
                'segment-item',
                SegmentItemRecipe({ active: active === value }),
                props.className
            )}
            onClick={() => setActive(value)}
        />
    )
}