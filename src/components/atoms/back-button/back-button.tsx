"use client";

import { Button, ButtonIcon } from "@/components";
import { IconChevronLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();
  return (
    <Button
      variant="soft"
      size="icon-md"
      aria-label="Volver"
      rounded="full"
      onClick={() => router.back()}
    >
      <ButtonIcon icon={IconChevronLeft} />
    </Button>
  );
}
