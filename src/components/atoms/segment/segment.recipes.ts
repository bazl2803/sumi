import { cva } from "panda/css";

export const SegmentRecipe = cva({
    base: {
        display: "flex",
        backgroundColor: { base: "neutral.100", _osDark: "neutral.900" },
        padding: 1,
        borderRadius: "lg",
        gap: 1,
    },
    variants: {
        fullWidth: {
            true: { width: "full", justifyContent: "space-between" },
            false: { width: "fit-content" },
        }
    },
    defaultVariants: {
        fullWidth: false,
    }
});

export const SegmentItemRecipe = cva({
    base: {
        paddingX: 3,
        paddingY: 1.5,
        borderRadius: "md",
        fontSize: "sm",
        fontWeight: 500,
        cursor: "pointer",
        transition: "all 0.2s",
        color: { base: "neutral.500", _osDark: "neutral.400" },
        width: "full",
        textAlign: "center",
        _hover: {
            color: { base: "black", _osDark: "white" },
        },
    },
    variants: {
        active: {
            true: {
                backgroundColor: { base: "white", _osDark: "neutral.800" },
                color: { base: "black", _osDark: "white" },
                boxShadow: "sm",
            },
        },
    },
});
