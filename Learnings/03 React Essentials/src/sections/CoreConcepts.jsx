import CoreConcept  from '../components/CoreConcept/CoreConcept.jsx';
import { CORE_CONCEPTS } from '../data.js';

export default function CoreConcepts(){
    return (
        <section id='core-concepts'>
            <h2>Core ConceptsSs</h2>
            <ul>
            {CORE_CONCEPTS.map((conceptItem  =>  
                <CoreConcept {...conceptItem}/> 
            ))}
            </ul>
      </section>
    )
} 