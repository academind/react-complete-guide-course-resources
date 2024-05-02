import { useState } from "react";

// useState is a React hook, which is technically a regular function, but can only be called inside react functions or other react hooks
import { CORE_CONCEPTS } from "./data.js";
import { Header } from "./components/Header/Header.jsx";
import { CoreConcept } from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { EXAMPLES } from "./data.js";

//you execute functions/components not by calling them, but with instanciating as if they were HTML elements.
//React components MUST start with an uppercase character, to tell React that it's not a built-in component, like <header> or <Header>

//useState can only be called at the top level of a component function.
function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    //console.log(selectedButton) The previous state will be logged upon updating, however, the UI will be correct in its display.
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  // state is a way of telling React that we want to update the UI
  return (
    <div>
      <Header />{" "}
      {/* Components can have an opening and closing tag, or can be self-closing, as you see here*/}
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
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
            <TabButton onClick={() => handleClick("components")}>
              Components
            </TabButton>
            {/* The anonymous arrow function allows a value to be passed to the function on the right */}
            <TabButton onClick={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton onClick={() => handleClick("props")}>Props</TabButton>
            <TabButton onClick={() => handleClick("state")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
