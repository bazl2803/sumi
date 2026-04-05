import { sva } from "panda/css"
import { RolesList } from "./_components/roles-list"
import { CredentialsAppbar } from "./_components/credentials-appbar"

// --- Styles -----------------------------------------------------------------
const CredetialsManagementPageStyles = sva({
    slots: ['root', 'content', 'roleCard'],
    base: {
        root: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '7xl',
            marginInline: 'auto',
            width: 'full',
            paddingInline: { base: 2, md: 8 },
        },
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
export default async function CredetialsManagementPage() {
    const classes = CredetialsManagementPageStyles()

    return (
        <div className={classes.root}>
            <CredentialsAppbar />

            <div className={classes.content}>
                <RolesList />
            </div>
        </div>
    )
}