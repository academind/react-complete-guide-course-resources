import TabButton from "./TabButton";
import { ExampleObject } from "../data";
import { useState } from "react";
import Section from "./Sections";
import TabMenu from "./TabMenu";

export default function example() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{ExampleObject[selectedTopic].title}</h3>
        <p>{ExampleObject[selectedTopic].description}</p>
        <pre>
          <code>{ExampleObject[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  const buttonArray = ["components", "jsx", "props", "state"];
  const Buttons = buttonArray.map((button, index) => (
    <TabButton
      isSelected={selectedTopic === button}
      onClick={() => handleSelect(button)}
    >
      {button}
    </TabButton>
  ));
  console.log("EXAMPLE COMPONENT EXECUTING");
  return (
    <Section id="examples" title="Examples">
      <TabMenu Container="menu" buttons={Buttons}>
        {tabContent}
      </TabMenu>
    </Section>
  );
}
