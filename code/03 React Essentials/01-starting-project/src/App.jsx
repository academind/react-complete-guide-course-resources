import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import TabButton from './components/TabButton';
import { useState } from 'react';

function App() {

  const [ selectedTopic, setSelectedTopic ] = useState();

  function handleSelect(selectedButton) {
    // selectedButton should be string => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton)
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            { CORE_CONCEPTS.map((conceptItem) => {
              return <CoreConcept key={conceptItem.title} {...conceptItem} /> 
            })}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton 
              isSelected={selectedTopic === 'components'} 
              onSelect={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'props'} 
              onSelect={() => handleSelect('props')}
            >
                Props
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'state'} 
              onSelect={() => handleSelect('state')}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
