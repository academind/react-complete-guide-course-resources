import TabButton from "./TabButton"

export default function Tabs({ children, buttons }) {
    return (
        <>
            <menu>
                {buttons}
            </menu>
            {children}
        </>
    )
}