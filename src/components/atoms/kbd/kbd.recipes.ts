import { cva } from 'panda/css'

export const KbdRecipe = cva({
    base: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'mono',
        fontSize: '0.85em',
        fontWeight: '500',
        lineHeight: '1',
        padding: '0.4em',
        borderRadius: 'lg',
        backgroundColor: { base: 'neutral.200', _osDark: 'neutral.800' },
        color: { base: 'neutral.600', _osDark: 'neutral.300' },
    },
})
