export default function TabButton({ children, onSelect }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
