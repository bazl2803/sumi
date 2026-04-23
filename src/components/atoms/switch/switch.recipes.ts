import { cva } from 'panda/css'

export const SwitchRecipe = cva({
  base: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 'full',
    transition: 'all 0.2s ease-in-out',
    width: '44px',
    height: '24px',
    backgroundColor: { base: 'neutral.200', _osDark: 'neutral.800' },
    _checked: {
      backgroundColor: { base: 'black', _osDark: 'white' },
    },
    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  variants: {
    size: {
      sm: {
        width: '36px',
        height: '20px',
      },
      md: {
        width: '44px',
        height: '24px',
      },
      lg: {
        width: '52px',
        height: '28px',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const SwitchThumbRecipe = cva({
  base: {
    display: 'block',
    width: '20px',
    height: '20px',
    backgroundColor: { base: 'white', _osDark: 'black' },
    borderRadius: 'full',
    boxShadow: 'sm',
    transition: 'transform 0.2s ease-in-out',
    transform: 'translateX(2px)',
    _checked: {
      transform: 'translateX(22px)',
    },
  },
  variants: {
    size: {
      sm: {
        width: '16px',
        height: '16px',
        _checked: {
          transform: 'translateX(18px)',
        },
      },
      md: {
        width: '20px',
        height: '20px',
        _checked: {
          transform: 'translateX(22px)',
        },
      },
      lg: {
        width: '24px',
        height: '24px',
        _checked: {
          transform: 'translateX(26px)',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
