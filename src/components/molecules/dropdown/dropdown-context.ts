'use client'

import React from 'react'

interface DropdownContextValue {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DropdownContext = React.createContext<
    DropdownContextValue | undefined
>(undefined)

export const useDropdown = () => {
    return (
        React.use(DropdownContext) ??
        new Error("useDropdown must be used within a DropdownProvider")
    ) as DropdownContextValue
}