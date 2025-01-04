export function TicButton({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
}
