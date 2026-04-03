import { Group, List, ListItem, Table, Typography } from "@/components"
import { getRoles } from "@/features/roles/actions/getRoles"
import { IconShieldFilled } from "@tabler/icons-react"
import { sva } from "panda/css"

// --- Styles -----------------------------------------------------------------
const RolesListStyles = sva({
    slots: ['roleCard'],
    base: {
        roleCard: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            rounded: 'lg',
            _hover: {
                backgroundColor: { base: 'neutral.100', _osDark: 'neutral.950' },
                outline: '1px solid',
                outlineColor: { base: 'neutral.200', _osDark: 'neutral.800' },
            }
        }
    }
})

// --- JSX --------------------------------------------------------------------
export const RolesList = async () => {
    const classes = RolesListStyles()
    const roles = await getRoles()

    if (!roles) {
        return <p>No roles found</p>
    }

    return (
        <Table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Permisos</th>
                    <th>Usuarios</th>
                </tr>
            </thead>
            <tbody>
                {roles.map((role) => (
                    <tr key={role._id}>
                        <td>{role.name}</td>
                        <td>{role.permissions?.length || 0}</td>
                        <td>{1}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}