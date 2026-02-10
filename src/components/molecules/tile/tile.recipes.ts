import { css } from "panda/css";

export const TileRecipe = css({
  display: "flex",
  flexDirection: "column",
  rowGap: 4,
  padding: 4,
  borderRadius: "xl",
  backgroundColor: { base: "white", _osDark: "neutral.950" },
});

export const TileHeaderRecipe = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "nowrap",
  columnGap: 1,
});

export const TileContentRecipe = css({
  display: "flex",
  flexDirection: "column",
  rowGap: 1,
});
