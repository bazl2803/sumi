import { css, cx } from "panda/css"

interface AppbarLineProps extends React.ComponentPropsWithRef<'div'> { }

const AppbarLineStyles = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 'full',
})

export function AppbarLine({ children, className, ...props }: AppbarLineProps) {
    return (
        <div {...props} className={cx(AppbarLineStyles, className)}>
            {children}
        </div>
    )
}