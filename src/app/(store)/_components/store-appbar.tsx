"use client";

import { Appbar, Button, ButtonIcon, Group, Logo } from "@/components";
import { IconShoppingCart } from "@tabler/icons-react";
import { sva } from "panda/css";
import { AccountControl } from "./account-control";
import { StoreCommandBox } from "@/app/(store)/_components/store-command-box";

const styles = sva({
  slots: ["root", "commandBox", "wrapper", "shoppingCartButton"],
  base: {
    root: {
      display: "flex",
      flexWrap: "nowrap",
      alignItems: "top",
      flexDirection: "row",
      position: "sticky",
      top: 0,
      zIndex: "100",
      paddingBlock: 4,
      paddingBottom: 8,
      overflowY: "visible",
      bgLinear: "to-b",
      gradientFrom: { base: "neutral.50", _osDark: "neutral.950" },
      gradientVia: { base: "neutral.50/50", _osDark: "neutral.950/50" },
      gradientViaPosition: "75%",
      gradientTo: { base: "neutral.50/0", _osDark: "neutral.950/0" },
      gap: 4,
    },
    commandBox: {
      display: "none",
      lg: {
        display: "block",
        width: "lg",
      },
    },
    shoppingCartButton: {
      display: "none",
      lg: {
        display: "block",
      },
    },
    wrapper: {
      display: "flex",
      flexWrap: "nowrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 4,
      paddingInline: 4,
      m: "auto",
      w: "full",
      maxW: "7xl",
    },
  },
});

export const StoreAppbar = ({ className }: { className?: string }) => {
  const classes = styles();

  return (
    <Appbar>
      <Appbar.Line>
        <Logo />

        <StoreCommandBox className={classes.commandBox} />

        <Group>
          <Button
            className={classes.shoppingCartButton}
            variant="subtle"
            rounded="full"
            size="icon"
          >
            <ButtonIcon icon={IconShoppingCart} />
          </Button>

          <AccountControl />
        </Group>
      </Appbar.Line>
    </Appbar>
  );
};
