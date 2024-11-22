import { EXAMPLES } from '../src/data.ts'
import { TabKey } from '../src/data.ts'

type TabContent = {
    contentProp: TabKey,
}

const TabContent = ({ contentProp }: TabContent) => {
    return (
        <div id="tab-content">
            <h3>{EXAMPLES[contentProp].title}</h3>
            <p>{EXAMPLES[contentProp].description}</p>
            <pre>
                <code>
                    {EXAMPLES[contentProp].code}
                </code>
            </pre>
        </div>
    )
}

export default TabContent