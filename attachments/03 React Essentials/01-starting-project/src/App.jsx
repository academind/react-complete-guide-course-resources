import { CORE_CONCEPTS } from "./data.js";
import { Header }  from "./components/Header/Header.jsx";
import { CoreConcept } from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

function handleClick () {
  console.log("hello world! - Clicked!")
}

//you execute functions/components not by calling them, but with instanciating as if they were HTML elements.
//React components MUST start with an uppercase character, to tell React that it's not a built-in component, like <header> or <Header>



function App() {
  return (
    <div>
      <Header />{" "}
      {/* Components can have an opening and closing tag, or can be self-closing, as you see here*/}
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={handleClick}>Components</TabButton>
            <TabButton onClick={handleClick}>JSX</TabButton>
            <TabButton onClick={handleClick}>Props</TabButton>
            <TabButton onClick={handleClick}>State</TabButton>
          </menu>

        </section>
      </main>
    </div>
  );
}

export default App;
