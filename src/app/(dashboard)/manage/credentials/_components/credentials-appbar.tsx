"use client";

import { Appbar, Button, Typography } from "@/components";
import { NewRoleButton } from "./new-role-button";
import { IconMenu } from "@tabler/icons-react";

export const CredentialsAppbar = () => {
  return (
    <Appbar>
      <Appbar.Line>
        <Typography variant="title1" emphasized>
          Credenciales
        </Typography>
      </Appbar.Line>
      <Appbar.Line>
        <NewRoleButton />
      </Appbar.Line>
    </Appbar>
  );
};
