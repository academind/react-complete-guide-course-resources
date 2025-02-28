import { useState } from 'react'; 

import compenentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept  from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx'
import {EXAMPLES} from './data-with-examples.js'

function App() {
  const [selectedTopic, setSelectedTopic] = useState('')

  const tabContent = selectedTopic ? (
    <div id='tab-content'>
      <h3>
        {EXAMPLES[selectedTopic].title}
      </h3>
      <p>
      {EXAMPLES[selectedTopic].description}
      </p>
      <pre>
      <code>
          {EXAMPLES[selectedTopic].code}
      </code> 
      </pre>
    </div>
  ) : (
    <p> First You Should Select Topic </p>
  )

  function handleSelect(value) {
    setSelectedTopic(value)
    console.log('hello - selected', value)
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
          {CORE_CONCEPTS.map((conceptItem  =>  
              <CoreConcept {...conceptItem}/> 
          ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelected={() => handleSelect('components')}>Component 1</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelected={() => handleSelect('jsx')}>Component 2</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelected={() => handleSelect('props')}>Component 2</TabButton>

          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
