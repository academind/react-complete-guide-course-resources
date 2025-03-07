import { useState } from 'react'; 
import TabButton from '../components/TabButton/TabButton.jsx'
import Section from '../components/Section/Section.jsx';
import {EXAMPLES} from '../data-with-examples.js'

export default function Examples(){

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
        <Section title="Examples" id="examples">
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelected={() => handleSelect('components')}>Component 1</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelected={() => handleSelect('jsx')}>Component 2</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelected={() => handleSelect('props')}>Component 2</TabButton>

          </menu>
          {tabContent}
        </Section>
    )
}