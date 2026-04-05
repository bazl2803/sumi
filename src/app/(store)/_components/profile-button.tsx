import { Avatar, Button } from "@/components";
import { User } from "better-auth";
import { css } from "panda/css";

// --- Types ------------------------------------------------------------------
interface ProfileButtonProps {
  user: User;
}

// --- Component ---------------------------------------------------------------
export const ProfileButton = ({ user }: ProfileButtonProps) => {
  return (
    <>
      <div className={css({ display: "none", lg: { display: "block" } })}>
        <Button rounded={"full"} variant={"subtle"}>
          <Button.Addon>
            <Avatar src={user.image!} fallback={user.name![0]} />
          </Button.Addon>
          <Button.Label>{user.name}</Button.Label>
        </Button>
      </div>

      <div className={css({ display: "block", lg: { display: "none" } })}>
        <Avatar size="sm" src={user.image!} fallback={user.name![0]} />
      </div>
    </>
  );
};
