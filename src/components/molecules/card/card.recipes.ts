import { cva } from "panda/css";

export const CardRecipe = cva({
  base: {
    p: 4,
    borderRadius: "xl",
    outline: "1px solid",
    outlineColor: { base: "neutral.200", _osDark: "neutral.700" }
  },
});
