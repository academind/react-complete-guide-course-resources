import Player from './components/Player.jsx';
import TimerChallange from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange title='Easy' targetTime={1}/>
        <TimerChallange title='Not Easy' targetTime={5}/>
        <TimerChallange title='Getting tough' targetTime={10}/>
        <TimerChallange title='Only Pros' targetTime={15}/>

      </div>
    </>
  );
}

export default App;
