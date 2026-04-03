"use client";
import React from "react";

interface SegmentContextValue {
    active: string;
    setActive: (active: string) => void;
}

export const SegmentContext = React.createContext<
    SegmentContextValue | undefined
>(undefined);

export const useSegment = () => {
    return (React.use(SegmentContext) ??
        new Error(
            "useSegment must be used within a SegmentProvider"
        )) as SegmentContextValue;
};
