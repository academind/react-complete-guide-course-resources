import { useState, useCallback } from 'react';
import QUESTIONS from '../questions';
import Question from './Question';
import Summary from './Summary';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });

    }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]);

  if (quizIsComplete) {
    return (
      <Summary userAnswers={userAnswers} />
    );
  }

  return (
    <div id='quiz'>
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
      <button id='skip' onClick={handleSkipAnswer}>Skip question</button>
    </div>
  )
}