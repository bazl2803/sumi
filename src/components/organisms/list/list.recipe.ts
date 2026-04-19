import { css, cva } from "panda/css";

export const ListRecipe = css({
  display: "flex",
  flexDirection: "column",
  rowGap: 2,
});

export const ListItemRecipe = cva({
  base: {
    cursor: "pointer",
    padding: 2,
  },
  variants: {
    selected: {
      true: {
        border: "1px solid",
        borderColor: { base: "neutral.200", _osDark: "neutral.800" },
        backgroundColor: { base: "neutral.50", _osDark: "neutral.950" },
      },
    },
  },
});
