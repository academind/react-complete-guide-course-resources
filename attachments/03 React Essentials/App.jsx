const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import { CORE_CONCEPTS } from "./data.js"

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header(props) {
  return (
    <header>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p> {props.description} </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header {...CORE_CONCEPTS[0]}/>
      <Header {...CORE_CONCEPTS[1]}/>
      <Header {...CORE_CONCEPTS[2]}/>
      <Header {...CORE_CONCEPTS[3]}/>
{/*       <main>
        <h2>Time to get started!</h2>
      </main> */}
    </div>
  );
}

export default App;
