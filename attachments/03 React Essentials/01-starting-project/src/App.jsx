function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

//you execute functions/components not by calling them, but with instanciating as if they were HTML elements.

function App() {
  return (
    <div>
      <Header />  {/* Components can have an opening and closing tag, or can be self-closing, as you see here*/}
      <main>  
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
