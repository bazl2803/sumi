"use client";

import React from "react";
import { cx, css } from "panda/css";
import { SwitchRecipe, SwitchThumbRecipe } from "./switch.recipes";

interface SwitchProps
  extends Omit<React.ComponentPropsWithRef<"input">, "size"> {
  size?: "sm" | "md" | "lg";
  onCheckedChange?: (checked: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({
  className,
  size = "md",
  checked,
  defaultChecked,
  onCheckedChange,
  onChange,
  ref,
  ...props
}) => {
  const [isChecked, setIsChecked] = React.useState(
    checked ?? defaultChecked ?? false,
  );

  React.useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    if (checked === undefined) {
      setIsChecked(newChecked);
    }
    onChange?.(e);
    onCheckedChange?.(newChecked);
  };

  return (
    <label
      data-checked={isChecked || undefined}
      className={cx(SwitchRecipe({ size }), className)}
    >
      <input
        {...props}
        ref={ref}
        type="checkbox"
        className={css({
          opacity: 0,
          width: 0,
          height: 0,
          position: "absolute",
        })}
        checked={isChecked}
        onChange={handleChange}
      />
      <span
        data-checked={isChecked || undefined}
        className={SwitchThumbRecipe({ size })}
      />
    </label>
  );
};
