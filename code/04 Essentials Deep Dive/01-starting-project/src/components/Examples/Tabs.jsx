import TabButton from "./TabButton"

export default function Tabs({ children, buttons, ButtonsContainer }) {
    
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}