import Examples from './components/Examples/Examples.jsx';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import Header from './components/Header/Header.jsx';


function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
