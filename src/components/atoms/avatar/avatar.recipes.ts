import { sva } from "panda/css";

export const AvatarRecipe = sva({
  slots: ["root", "image", "fallback"],
  base: {
    root: {
      borderRadius: "full",
      backgroundColor: "neutral.50",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      objectFit: "cover",
      w: "full",
      h: "full",
      borderRadius: "full",
    },
    fallback: {
      color: "neutral.500",
    },
  },
  variants: {
    size: {
      xs: {
        root: {
          width: 8,
          height: 8,
          fontSize: 12,
        },
      },
      sm: {
        root: {
          width: 10,
          height: 10,
          fontSize: 14,
        },
      },
      md: {
        root: {
          width: 12,
          height: 12,
          fontSize: 16,
        },
      },
      lg: {
        root: {
          width: 16,
          height: 16,
          fontSize: 20,
        },
      },
    },
  },
  defaultVariants: {
    size: "xs",
  },
});
