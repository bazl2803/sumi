import React from "react";

interface CommandBoxContextValue {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    placeholder: string;
    setPlaceholder: React.Dispatch<React.SetStateAction<string>>
}

export const CommandBoxContext = React.createContext<
    CommandBoxContextValue | undefined
>(undefined);

export const useCommandBoxContext = () => {
    const context = React.useContext(CommandBoxContext);
    if (!context) {
        throw new Error("useCommandBoxContext must be used within a CommandBoxProvider");
    }
    return context;
}