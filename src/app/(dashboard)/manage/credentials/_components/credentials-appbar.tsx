"use client";

import { Appbar, Button, Typography } from "@/components";
import { NewRoleButton } from "./new-role-button";
import { IconMenu } from "@tabler/icons-react";

export const CredentialsAppbar = () => {
  return (
    <Appbar>
      <Appbar.Line>
        <Button size="icon-md" variant="soft" rounded="full">
          <Button.Icon icon={IconMenu} />
        </Button>

        <NewRoleButton />
      </Appbar.Line>

      <Appbar.Line>
        <Typography variant="title1" emphasized>Credenciales</Typography>
      </Appbar.Line>
    </Appbar>
  );
};
