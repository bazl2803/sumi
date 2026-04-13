"use client";

import { Appbar, Button, Typography } from "@/components";
import { css } from "panda/css";
import { NewRoleButton } from "./new-role-button";
import { IconMenu } from "@tabler/icons-react";

export const CredentialsAppbar = () => {
  return (
    <Appbar>
      <Appbar.Line>
        <Button size="icon-sm" variant="soft" rounded="full">
          <Button.Icon icon={IconMenu} />
        </Button>
        <Typography variant="headline">Credenciales</Typography>
        <Button size="icon-sm" variant="soft" rounded="full" disabled />
      </Appbar.Line>

      <Appbar.Line className={css({ "& > button": { width: "full" } })}>
        <NewRoleButton />
      </Appbar.Line>
    </Appbar>
  );
};
