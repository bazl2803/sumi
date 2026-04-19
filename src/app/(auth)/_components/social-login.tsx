"use client";

import { Button, ButtonIcon, ButtonLabel } from "@/components";
import { css } from "panda/css";
import Image from "next/image";
import { IconBrandAppleFilled } from "@tabler/icons-react";
import { LoginSocialAction } from "@/actions/user.actions";

const styles = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  rowGap: 4,
  width: "full",
});

export const SocialLogin = () => {
  return (
    <div className={styles}>
      <Button variant="outline" onClick={() => LoginSocialAction("google")}>
        <Image src="/icons8-google.svg" alt="Google" width={20} height={20} />
        <ButtonLabel>Continuar con Google</ButtonLabel>
      </Button>

      <Button variant="outline" onClick={() => LoginSocialAction("microsoft")}>
        <Image
          src="/icons8-microsoft.svg"
          alt="Microsoft"
          width={20}
          height={20}
        />
        <ButtonLabel>Continuar con Microsoft</ButtonLabel>
      </Button>

      <Button variant="outline">
        <ButtonIcon icon={IconBrandAppleFilled} />
        <ButtonLabel>Continuar con Apple</ButtonLabel>
      </Button>
    </div>
  );
};
