import React, { useState } from "react";

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

function MainGoal({ id }) {
  return (
    <p id={id}>
      My main goal is to learn react, from the ground up and in depth!!
    </p>
  );
}

function AskName() {
  const [name, setName] = useState("");
  function handleClick() {
    const inputName = prompt("What is your name ?");
    setName(inputName);
  }

  return (
    <div>
      <button onClick={handleClick}>Tell me your name</button>
      {name && <p>Hello there !{name}</p>}
    </div>
  );
}

function Button({ onClick }) {
  return (
    <button onClick={onClick}>
      <label>This is a button.</label>
    </button>
  );
}

function App() {
  function handleButtonClick() {
    alert("You pressed the button!");
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <AskName />
      </main>
      <MainGoal id="maingoal"></MainGoal>
      <Button onClick={handleButtonClick}></Button>
    </div>
  );
}

export default App;
