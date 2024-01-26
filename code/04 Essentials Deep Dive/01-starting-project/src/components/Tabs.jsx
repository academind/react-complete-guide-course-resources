export default function Tabs({ children, buttons, ButtonContainer="menu"}) {
//   const ButtonContainer = buttonsContainer;
    return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
