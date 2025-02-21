export default function TabButton({ children, onSelected}) {

    function handleClick() {
        console.log('hello')
    }


    return (
        <li>
           <button onClick={onSelected}>{children}</button> 
        </li>
    )
}