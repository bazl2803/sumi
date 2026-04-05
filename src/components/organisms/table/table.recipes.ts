
import { css } from "panda/css";

export const TableRecipe = css({
    borderCollapse: "separate",
    borderSpacing: "0 4px",
    width: "100%",
    "& th": {
        textAlign: "left",
        fontWeight: 400,
        color: "neutral.500",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        paddingBlock: 2,
        paddingInline: 4,
        _last: {
            textAlign: "right",
        }
    },
    "& td": {
        verticalAlign: "top",
        textAlign: "left",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        paddingBlock: 2,
        paddingInline: 4,
        _first: {
            borderLeftRadius: "xl",
        },
        _last: {
            textAlign: "right",
            borderRightRadius: "xl",
        }
    },
    "& tbody tr": {
        _hover: {
            backgroundColor: { base: "neutral.100", _osDark: "neutral.900" },
        }
    },
});

