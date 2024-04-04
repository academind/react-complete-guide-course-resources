
import { useRef } from 'react';

export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id='answers'>
      {shuffledAnswers.current.map((answer, index) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = '';

        if (answerState === 'answered' && isSelected) {
          cssClass = 'selected';
        }

        if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
          cssClass = answerState;
        }

        return <li key={index} className='answer'>
          <button
            onClick={() => onSelect(answer)}
            className={cssClass}
            disabled={answerState !== ''}
          >
            {answer}
          </button>
        </li>
      }
      )}
    </ul>
  );
}