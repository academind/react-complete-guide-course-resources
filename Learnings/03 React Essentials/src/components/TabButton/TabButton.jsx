export default function TabButton({ children, onSelected, isSelected}) {

    function handleClick() {
        console.log('hello')
    }


    return (
        <li>
           <button className={isSelected ? 'active' : ''} onClick={onSelected}>{children}</button> 
        </li>
    )
}