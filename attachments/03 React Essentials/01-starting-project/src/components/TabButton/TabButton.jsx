export default function TabButton({children, onClick, isSelected}) {
  // you can also use ...TabButton({children})
    

  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onClick}>{children}</button>
    </li>
  );
  // which would make the object in line 9 as just {children} instead of {props.children}
}
