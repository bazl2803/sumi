import { css, cva } from "panda/css";

export const ListRecipe = css({
    display: "flex",
    flexDirection: "column",
    rowGap: 2,
})

export const ListItemRecipe = cva({
    base: {
        cursor: "pointer",
        padding: 2,
    },
    variants: {
        selected: {
            true: {
                backgroundColor: { base: "white", _osDark: "black" },
            },
        },
    },
})
