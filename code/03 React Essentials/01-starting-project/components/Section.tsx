import { ReactNode, HTMLAttributes } from 'react'

type TSectionProp = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode,
    title: string
}

const Section = ({ title, children, ...props }: TSectionProp) => {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

export default Section