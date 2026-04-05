import { css } from "panda/css";

export const Overlay = () => {
  return (
    <div className={css({ position: "relative", zIndex: 50 })}>
      <div
        className={css({
          position: "fixed",
          inset: 0,
          backgroundColor: "black/50",
          backdropFilter: "blur(4px)",
          zIndex: 40,
        })}
      />
    </div>
  );
};
