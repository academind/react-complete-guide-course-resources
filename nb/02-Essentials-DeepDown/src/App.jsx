import Header from "./components/Header/Header.jsx";
import CoreConceptComp from "./components/CoreConeceptComp.jsx";
import ExamplesComp from "./components/Examples.jsx";

function App() {
  console.log("APP COMPONENT EXECUTING");

  return (
    <>
      <Header />
      <main>
        <CoreConceptComp />
        <ExamplesComp />
      </main>
    </>
  );
}

export default App;
