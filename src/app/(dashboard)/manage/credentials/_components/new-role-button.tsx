"use client";

import { Button, Typography } from "@/components";
import { Sheet } from "@/components/organisms/sheet/sheet";
import { IconCheck, IconShieldPlus, IconX } from "@tabler/icons-react";
import { css } from "panda/css";
import { useState } from "react";

export const NewRoleButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        className={css({ width: "full" })}
        rounded="full"
        onClick={() => setIsOpen(true)}
      >
        <Button.Icon icon={IconShieldPlus} />
        <Button.Label>Crear Nuevo Rol</Button.Label>
      </Button>

      <Sheet side="bottom" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Sheet.Header>
          <Button
            size="icon-md"
            variant="subtle"
            rounded="full"
            onClick={() => setIsOpen(false)}
          >
            <Button.Icon icon={IconX} />
          </Button>

          <Typography variant="headline">Crear Nuevo Rol</Typography>

          <Button
            className={css({
              bgColor: "blue.700/90",
              color: "white",
              _hover: { bgColor: "blue.700/80" },
              _osDark: {
                bgColor: "blue.600/70",
                color: "white",
                _hover: { bgColor: "blue.600/80" },
              },
            })}
            size="icon-md"
            variant="subtle"
            rounded="full"
          >
            <Button.Icon icon={IconCheck} />
          </Button>
        </Sheet.Header>
      </Sheet>
    </>
  );
};
