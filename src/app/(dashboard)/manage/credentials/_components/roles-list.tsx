import { Group, Table } from "@/components"
import { getRolesCollectionStats } from "@/features/roles/actions/getRolesCollectionStats"
import { IconKey, IconUser } from "@tabler/icons-react"
import { css, sva } from "panda/css"

// --- Styles -----------------------------------------------------------------
const RolesListStyles = sva({
    slots: ['table'],
    base: {
        table: {
            userSelect: 'none',
        }
    }
})

// --- JSX --------------------------------------------------------------------
export const RolesList = async () => {
    const classes = RolesListStyles()
    const roles = await getRolesCollectionStats()

    if (!roles) {
        return <p>No se encontraron roles</p>
    }

    return (
        <Table className={classes.table}>
            <thead>
                <tr>
                    <th className={css({ width: 'full' })}>Nombre</th>
                    <th>Perm.</th>
                    <th>Usr.</th>
                </tr>
            </thead>
            <tbody>
                {roles.map((role) => (
                    <tr key={role._id}>
                        <td>{role.name}</td>
                        <td>
                            <Group>
                                <IconKey size={20} />
                                {role.permissionsCount}
                            </Group>
                        </td>
                        <td>
                            <Group>
                                <IconUser size={20} />
                                {role.userAssignedCount}
                            </Group>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}