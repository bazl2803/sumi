import { css, cva, sva } from "panda/css";

export const CarouselRecipe = sva({
    slots: ['root', 'rail'],
    base: {
        root: {
        },
        rail: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            scrollSnapType: "x mandatory",
            scrollSnapDestination: "x 0",
            scrollSnapStop: "always",
            overflowX: "scroll",
            scrollBehavior: "smooth",
            _scrollbar: {
                display: "none",
            },
        },
    },
})

export const CarouselItemRecipe = cva({
    base: {
        scrollSnapAlign: "start",
    },
    variants: {
        align: {
            start: {
                scrollSnapAlign: "start",
            },
            center: {
                scrollSnapAlign: "center",
            },
            end: {
                scrollSnapAlign: "end",
            },
        },
    },
    defaultVariants: {
        align: "start",
    },
})
