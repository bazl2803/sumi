import { css, cx } from "panda/css";
import { ComponentPropsWithRef } from "react";

interface AvatarGroupProps extends ComponentPropsWithRef<"div"> {
  children: React.ReactNode;
}

const AvatarGroupStyles = css({
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
  "& > *": {
    marginRight: "-10px",
  },
});

export function AvatarGroup({
  children,
  className,
  ...props
}: AvatarGroupProps) {
  return (
    <div {...props} className={cx("avatarGroup", AvatarGroupStyles, className)}>
      {children}
    </div>
  );
}
