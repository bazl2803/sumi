
import { css } from "panda/css";

export const TableRecipe = css({
    borderCollapse: "separate",
    borderSpacing: "0 8px",
    width: "100%",
    "& th": {
        textAlign: "left",
        fontWeight: "bold",
        color: "neutral.500",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        padding: 4,
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
        padding: 4,
        borderTop: "1px solid",
        borderBottom: "1px solid",
        borderColor: { base: "neutral.200", _osDark: "neutral.700" },
        borderRight: "1px solid",
        borderRightColor: { base: "neutral.200", _osDark: "neutral.700" },
        _first: {
            borderLeftRadius: "xl",
            borderLeft: '1px solid',
            borderLeftColor: { base: "neutral.200", _osDark: "neutral.700" },
        },
        _last: {
            textAlign: "right",
            borderRightRadius: "xl",
        }
    },
    "& tr": {
        backgroundColor: { base: "neutral.50", _osDark: "neutral.950" },
        _hover: {
            backgroundColor: { base: "neutral.100", _osDark: "neutral.900" },
        }
    },
});

