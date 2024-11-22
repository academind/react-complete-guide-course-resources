import reactImg from '../src/assets/config.png'
import './Header.css'

const Header = () => {

    const reactDescriptions: string[] = ['Fundamental', 'Crucial', 'Core'];

    function genRandomInt(max: number): number {
        return Math.floor(Math.random() * (max));
    }

    const description: string = reactDescriptions[genRandomInt(reactDescriptions.length)];

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    )
}

export default Header