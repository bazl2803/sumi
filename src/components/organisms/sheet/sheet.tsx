"use client";
import { AnimatePresence, motion } from "framer-motion";
import { css, sva } from "panda/css";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

// --- Types ------------------------------------------------------------------
type SheetSide = "left" | "right" | "top" | "bottom";

interface SheetProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  side?: SheetSide;
}
// --- Styles ------------------------------------------------------------------
const SheetStyles = sva({
  slots: ["sheet", "backdrop", "closeButton"],
  base: {
    backdrop: {
      position: "fixed",
      inset: 0,
      backgroundColor: "neutral.950/50",
      zIndex: 200,
    },
    sheet: {
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      width: { base: "full", md: "400px" },
      bg: { base: "neutral.50/70", _osDark: "neutral.950/70" },
      boxShadow: "xl",
      zIndex: 201,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: {
        base: "neutral.200",
        _osDark: "neutral.900",
      },
    },
    closeButton: {
      position: "relative",
    },
  },
  variants: {
    side: {
      right: {
        sheet: {
          top: 0,
          right: 0,
          bottom: 0,
          width: { base: "full", md: "400px" },
        },
      },
      left: {
        sheet: {
          top: 0,
          left: 0,
          bottom: 0,
          width: { base: "full", md: "400px" },
        },
      },
      top: {
        sheet: {
          top: 0,
          left: 0,
          right: 0,
          height: "300px",
          marginInline: "auto",
          borderBottomRadius: "4xl",
        },
      },
      bottom: {
        sheet: {
          bottom: 0,
          left: 0,
          right: 0,
          top: "auto",
          height: "400px",
          marginInline: "auto",
          borderTopRadius: "4xl",
        },
      },
    },
  },
});

// --- Helpers ------------------------------------------------------------------
const getMotionProps = (side: SheetSide) => {
  switch (side) {
    case "right":
      return {
        initial: { x: "100%" },
        animate: { x: 0 },
        exit: { x: "100%" },
      };
    case "left":
      return {
        initial: { x: "-100%" },
        animate: { x: 0 },
        exit: { x: "-100%" },
      };
    case "top":
      return {
        initial: { y: "-100%" },
        animate: { y: 0 },
        exit: { y: "-100%" },
      };
    case "bottom":
      return {
        initial: { y: "100%" },
        animate: { y: 0 },
        exit: { y: "100%" },
      };
  }
};

const SheetPortal = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(children, document.body);
};

// --- JSX --------------------------------------------------------------------
export function Sheet({
  children,
  isOpen,
  onClose,
  side = "right",
}: SheetProps) {
  const styles = SheetStyles({ side });
  const motionProps = getMotionProps(side);

  return (
    <SheetPortal>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />

            <motion.div
              {...motionProps}
              className={styles.sheet}
              style={{ backdropFilter: "blur(8px)" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </SheetPortal>
  );
}

// --- Subcomponents --------------------------------------------------------
const SheetHeader = ({ children }: { children: React.ReactNode }) => (
  <div
    className={css({
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 4,
      alignItems: "center",
      gap: 2,
    })}
  >
    {children}
  </div>
);

const SheetContent = ({ children }: { children: React.ReactNode }) => (
  <div className={css({ display: "flex", flexDirection: "column", gap: 2 })}>
    {children}
  </div>
);

const SheetFooter = ({ children }: { children: React.ReactNode }) => (
  <div className={css({ display: "flex", flexDirection: "column", gap: 2 })}>
    {children}
  </div>
);

Sheet.Header = SheetHeader;
Sheet.Content = SheetContent;
Sheet.Footer = SheetFooter;
Sheet.Portal = SheetPortal;
