// Button for the Tabs in the menu
export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected  ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>
  );
}
