import { css, sva } from 'panda/css'

export const NavbarRecipe = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))',
    gridGap: 1,
    padding: 2,
    borderRadius: 'full',
    outline: '1px solid',
    outlineColor: { base: 'gray.200/70', _osDark: 'gray.800/70' },
    backgroundColor: { base: 'gray.50/70', _osDark: 'gray.950/70' },
    backdropFilter: 'auto',
    backdropBlur: 'sm'
})

export const NavbarItemRecipe = sva({
    slots: ['root', 'label'],
    base: {
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            rowGap: 1,
            padding: 1,
            borderRadius: '4xl',
            color: { base: 'gray.600', _osDark: 'gray.400' },
        },
        label: {
            fontSize: 'xs',
            fontWeight: '500',
            color: { base: 'gray.500', _osDark: 'gray.400' },
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            maxWidth: '100%',
        }
    },
    variants: {
        selected: {
            true: {
                root: {
                    bg: { base: 'gray.100', _osDark: 'gray.900' },
                    color: { base: 'black', _osDark: 'white' },
                }
            },
        }
    }
})