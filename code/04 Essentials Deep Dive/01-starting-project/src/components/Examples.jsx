import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";
import { useState } from "react";
import { EXAMPLES } from "../data";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    //State updater function  
    function handleSelect(selectedButton) {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton);
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

    return (
        <Section title="Examples" id="examples">
            <Tabs buttons={
                <>
                    <TabButton
                        isSelected={selectedTopic === 'components'}
                        onClick={() => handleSelect('components')}
                    >
                        Components
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic === 'jsx'}
                        onClick={() => handleSelect('jsx')}
                    >
                        JSX
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic === 'props'}
                        onClick={() => handleSelect('props')}
                    >
                        Props
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic === 'state'}
                        onClick={() => handleSelect('state')}
                    >
                        State
                    </TabButton>
                </>
            }>
                {tabContent}
            </Tabs>
        </Section>
    );
}