import MenuTab from './MenuTab'
import TabContent from './TabContent.tsx'
import { TabKey } from '../src/data.ts'
import { useState } from 'react' // react hook, only inside of component function
import Section from './Section.tsx'

export const ExampleList = () => {

    const [content, setContent] = useState<TabKey | null>(null); // reavaliate the component

    function handleClick(seletedBtn: TabKey | string) {
        setContent(seletedBtn as TabKey)
    }

    return (
        <Section id='examples' title='Examples'>
            <MenuTab content={content} seletedTabProp={handleClick} />
            {/* Dynamic content */}
            {
                content ? <TabContent contentProp={content} /> : <p>Please select a topic.</p>
            }
        </Section>
    )
}
