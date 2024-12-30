import { CORE_CONCEPTS } from "./data";
import Header from "./componentt/Header";
import Block from "./componentt/Block.jsx";
import TabButton from "./componentt/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data-with-examples";

function App() {
  const [tabContent, setTabContent] = useState(null);

  function handleSelect(e) {
    setTabContent(EXAMPLES[e.toLowerCase()]);
    console.log(tabContent, e);
  }

  let content = <p>Please Select a topic</p>;
  if (tabContent) {
    content = (
      <div id="tab-content" className="block-container">
        <h3>{tabContent.title}</h3>
        <p>{tabContent.description}</p>
        <pre>
          <code>{tabContent.code}</code>
        </pre>
      </div>
    );
  }

  function isButtonSelected(e, topic) {
    if (e == null || topic == null) return false;
    return e.toLowerCase() === topic.toLowerCase();
  }

  console.log("init");
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts" className="block-container">
          <ul>
            {CORE_CONCEPTS.map((block, index) => (
              <li key={index}>
                <Block {...block} />
              </li>
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton
              onClick={() => handleSelect("Components")}
              isSelected={isButtonSelected("components", tabContent?.title)}
            >
              Components
            </TabButton>
            <TabButton
              onClick={() => handleSelect("JSX")}
              isSelected={isButtonSelected("JSX", tabContent?.title)}
            >
              JSX
            </TabButton>
            <TabButton
              onClick={() => handleSelect("Props")}
              isSelected={isButtonSelected("Props", tabContent?.title)}
            >
              Props
            </TabButton>
            <TabButton
              onClick={() => handleSelect("State")}
              isSelected={isButtonSelected("State", tabContent?.title)}
            >
              State
            </TabButton>
          </menu>
        </section>
        {content}
      </main>
    </div>
  );
}

export default App;
