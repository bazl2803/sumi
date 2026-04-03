import { css, sva } from "panda/css";

export const SidebarRecipe = css({
  display: "grid",
  minW: "min(240px, 100%)",
  columnGap: 4,
  height: "full",
  width: "auto",
  padding: 2
});

export const SidebarContentRecipe = css({
  display: "flex",
  flexDirection: "column",
  rowGap: 6,
  flexGrow: 1,
});

export const SidebarTrailRecipe = css({
  display: "flex",
  flexDirection: "column",
  padding: 2,
  rowGap: 8,
  justifyContent: "space-between",
  height: "full",
  borderRadius: "xl",
  outline: "1px solid",
  outlineColor: { base: "white", _osDark: "black" },
  boxShadow: "xl",
  backgroundColor: { base: "neutral.50/70", _osDark: "neutral.950/70" },
});

export const SidebarHeaderRecipe = sva({
  slots: ["root", "logo"],
  base: {
    root: {
      display: "flex",
      justifyContent: "space-between",
      padding: 2,
    },
    logo: {
      height: "32px",
      width: "auto",
    },
  },
});

export const SidebarFooterRecipe = css({
  position: "sticky",
  bottom: 0,
})

export const SidebarTriggerRecipe = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "full",
});

export const SidebarSectionRecipe = sva({
  slots: ["root", "title", "list"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
    },
    title: {
      fontWeight: "500",
      fontSize: "xs",
      paddingX: 2,
      color: "neutral.400",
    },
    list: {
      display: "flex",
      flexDirection: "column",
      gap: 1,
    },
  },
  variants: {
    grow: {
      true: {
        root: {
          flexGrow: 1,
        },
      },
    },
  },
});

export const SidebarItemRecipe = sva({
  slots: ["root", "icon", "label", "wrapper"],
  base: {
    root: {
      cursor: "pointer",
      textDecoration: "none",
    },
    label: {
      fontWeight: "500",
      fontSize: "sm",
    },
    wrapper: {
      display: "flex",
      alignItems: "center",
      borderRadius: "lg",
      padding: 2,
      gap: 2,
    },
  },
  variants: {
    selected: {
      true: {
        wrapper: {
          outline: "1px solid",
          outlineColor: { base: "neutral.200", _osDark: "neutral.800" },
          backgroundColor: { base: "white", _osDark: "black" },
        },
      },
      false: {
        wrapper: {
          _hover: {
            backgroundColor: { base: "neutral.100", _osDark: "neutral.900" },
          },
        },
      },
    },
  },
});
