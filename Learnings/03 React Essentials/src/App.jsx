

import Header from './components/Header/Header.jsx';
import CoreConcepts from './sections/CoreConcepts.jsx';
import Examples from './sections/Examples.jsx';

function App() {


  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
