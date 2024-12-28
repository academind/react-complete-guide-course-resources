import { CORE_CONCEPTS } from "./data";
import Header from "./componentt/Header";
import Block from "./componentt/Block.jsx";
import TabButton from "./componentt/TabButton";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts" className="block-container">
          <ul>
            {CORE_CONCEPTS.map((block, index) => (
              <li key={index}>
                <Block {...block} />
              </li>
            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Help</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
