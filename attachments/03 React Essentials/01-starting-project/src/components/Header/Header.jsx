import reactImg from '../../assets/react-core-concepts.png';
import './Header.css'

function getRandomIn(max){
    return Math.floor(Math.random() * (max + 1));
  }
  
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];


export default function Header() {
    const description = reactDescriptions[getRandomIn(2)];
  
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials - header</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
  }