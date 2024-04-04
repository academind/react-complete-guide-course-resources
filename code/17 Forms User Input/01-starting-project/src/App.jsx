import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import StateLogin from './components/StateLogin.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Signup /> */}
        <Login />
        {/* <StateLogin /> */}
      </main>
    </>
  );
}

export default App;
