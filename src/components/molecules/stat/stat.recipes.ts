import { css } from "panda/css";

export const StatRecipe = css({
  display: "flex",
  flexDirection: "column",
  rowGap: "0.5",
  userSelect: "none",
});

export const StatLabelRecipe = css({
  color: { base: "neutral.500", _osDark: "neutral.400" },
});

export const StatValueRecipe = css({
  display: "flex",
  alignItems: "center",
  color: { base: "neutral.900", _osDark: "neutral.50" },
  columnGap: 1,
});
