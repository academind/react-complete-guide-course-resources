export default function menu({ children, buttons, Container = "menu" }) {
  console.log("TABBUTTON COMPONENT EXECUTING");
  // const Container = container || "menu";
  return (
    <>
      <Container>{buttons}</Container>
      {children}
    </>
  );
}
