import {Button, Dropdown, DropdownContent, DropdownItem, DropdownTrigger} from "@/components";
import {IconArrowRight} from "@tabler/icons-react";
import Link from "next/link";

export const SignupButton = () => {
    return (
        <Link href={'/login'}>
            <Button rounded={'full'}>
                <Button.Label>Iniciar</Button.Label>
                <Button.Icon icon={IconArrowRight}/>
            </Button>
        </Link>
    )
}