"use client";

import { Appbar, Button, Stack, Typography } from "@/components";
import { css, sva } from "panda/css";
import { NewRoleButton } from "./new-role-button";
import { IconMenu } from "@tabler/icons-react";

const CredentialsAppbarStyles = sva({
  slots: ["mobile", "desktop"],
  base: {
    mobile: { lg: { display: "none" } },
    desktop: { lgDown: { display: "none" } },
  },
});

export const CredentialsAppbar = () => {
  return (
    <>
      <MobileCredentialsAppbar />
      <DesktopCredentialsAppbar />
    </>
  );
};

const MobileCredentialsAppbar = () => (
  <Appbar className={CredentialsAppbarStyles().mobile}>
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

const DesktopCredentialsAppbar = () => (
  <Appbar className={CredentialsAppbarStyles().desktop}>
    <Appbar.Line>
      <Stack>
        <Typography variant="headline">Credenciales</Typography>
        <Typography variant="subheadline">
          Aquí puedes gestionar los roles de tu organización.
        </Typography>
      </Stack>

      <NewRoleButton />
    </Appbar.Line>
  </Appbar>
);
