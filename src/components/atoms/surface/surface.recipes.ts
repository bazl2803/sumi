import { css, cva } from "panda/css";

export const SurfaceRecipe = cva({
  variants: {
    variant: {
      solid: {
        backgroundColor: { base: "neutral.50", _osDark: "neutral.950" },
      },
      outline: {
        outline: "1px solid",
        outlineColor: { base: "neutral.200", _osDark: "neutral.700" },
        backgroundColor: { base: "white", _osDark: "neutral.950" },
      },
      ghost: {
        
      }
    },
  },
});
