export function TicButton({ children, onClick, isDisabled = false }) {
  return (
    <>
      <button disabled={isDisabled} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
