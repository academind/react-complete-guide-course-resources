import { CORE_CONCEPTS } from '../src/data.ts'
import CoreConcept from './CoreConcept.tsx'
import Section from './Section.tsx'

const CoreConceptList = () => {
    return (
        <Section id="core-concepts" title='Core Concepts'>
            <ul>
                {CORE_CONCEPTS.map(({ title, image, description }, index) =>
                    <CoreConcept
                        key={index}
                        title={title}
                        description={description}
                        image={image}
                    />
                )}
            </ul>
        </Section>
    )
}

export default CoreConceptList