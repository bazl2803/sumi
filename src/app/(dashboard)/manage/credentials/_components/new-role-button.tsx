'use client'

import { Button } from "@/components"
import { IconShieldPlus } from "@tabler/icons-react"

export const NewRoleButton = () => {
    return (
        <Button rounded="full">
            <Button.Icon icon={IconShieldPlus} />
            <Button.Label>Crear Nuevo Rol</Button.Label>
        </Button>
    )
}