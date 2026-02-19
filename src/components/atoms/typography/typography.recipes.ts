import { cva } from "panda/css";

export const TypographyRecipe = cva({
  base: {
    fontWeight: "500",
    fontSmoothing: "antialiased",
  },
  variants: {
    variant: {
      "large-title": {
        fontSize: "26pt",
        lineHeight: "32pt",
        fontWeight: "400",
      },
      title1: {
        fontSize: "22pt",
        lineHeight: "26pt",
        fontWeight: "400",
      },
      title2: {
        fontSize: "17pt",
        lineHeight: "22pt",
        fontWeight: "400",
      },
      title3: {
        fontSize: "15pt",
        lineHeight: "20pt",
        fontWeight: "400",
      },
      headline: {
        fontSize: "13pt",
        lineHeight: "16pt",
        fontWeight: "700",
      },
      body: {
        fontSize: "13pt",
        lineHeight: "16pt",
        fontWeight: "400",
      },
      callout: {
        fontSize: "12pt",
        lineHeight: "15pt",
        fontWeight: "400",
      },
      subheadline: {
        fontSize: "11pt",
        lineHeight: "14pt",
        fontWeight: "400",
      },
      footnote: {
        fontSize: "10pt",
        lineHeight: "13pt",
        fontWeight: "400",
      },
      caption1: {
        fontSize: "10pt",
        lineHeight: "13pt",
        fontWeight: "400",
      },
      caption2: {
        fontSize: "10pt",
        lineHeight: "13pt",
        fontWeight: "500",
      },
    },
    emphasized: {
      true: {},
    },
    truncate: {
      true: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
    }
  },
  compoundVariants: [
    {
      variant: ["large-title", "title1", "title2"],
      emphasized: true,
      css: { fontWeight: "700" },
    },
    {
      variant: [
        "title3",
        "body",
        "callout",
        "subheadline",
        "footnote",
        "caption2",
      ],
      emphasized: true,
      css: { fontWeight: "600" },
    },
    {
      variant: "headline",
      emphasized: true,
      css: { fontWeight: "900" },
    },
    {
      variant: "caption1",
      emphasized: true,
      css: { fontWeight: "500" },
    },
  ],
  defaultVariants: {
    variant: "large-title",
  },
});
