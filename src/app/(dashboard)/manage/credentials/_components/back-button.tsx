'use client'

import { Button } from "@/components"
import { IconChevronLeft } from "@tabler/icons-react"
import { useRouter } from "next/navigation"

export const BackButton = () => {
    const router = useRouter()
    return (
        <Button variant="subtle" rounded="full" size="icon" onClick={() => router.back()}>
            <Button.Icon icon={IconChevronLeft} />
        </Button>
    )
}
