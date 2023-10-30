import TabButton from "./TabButton"

export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
    
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}