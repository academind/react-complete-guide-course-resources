import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallange({title, targetTime}) {
    const [timemRemaing, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsactive = timemRemaing > 0 && timemRemaing < targetTime * 1000;
    const timer = useRef();
    const resultDialog = useRef();
    if (timemRemaing <= 0) {
        clearInterval(timer.current);
        resultDialog.current.open();
    }

    function handleReset(){
        setTimeRemaining(targetTime * 1000);
    }

    function handleStart(){
       timer.current = setInterval(() => {
        setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
       }, 10);
    }

    function handleStop() {
        resultDialog.current.open();
        clearInterval(timer.current);
    }

    return (
        <>
            <ResultModal ref={resultDialog} targetTime={targetTime} remainingTime={timemRemaing} onReset={handleReset}/>
            <section className="challenge">
                <h2>
                    {title}
                </h2>
                <p className="challenge-time">
                    {targetTime} second {targetTime > 1 ? 's' : '' }
                </p>
                <p>
                    <button onClick={timerIsactive ? handleStop : handleStart}>
                        {timerIsactive ? 'stop' : 'start'} challenge
                    </button>
                </p>
                <p className={timerIsactive ? 'active' : ''}>
                    {timerIsactive ? 'Tic toc user tic toc' : 'Timer Stopped'}
                </p>
            </section>
        </>
    )
}