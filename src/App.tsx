import { useState } from "react";
import QuizLayout from "./components/QuizLayout";
import QuestionCard from "./components/QuestionCard";
import Result from "./components/Result";

import data from "./data/questions";

function App() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const current = data[index];

  function selectAnswer(choiceIndex: number) {
    const newAnswers = [...answers];
    newAnswers[index] = choiceIndex;
    setAnswers(newAnswers);
  }

  function next() {
    if (index < data.length - 1) {
      setIndex(i => i + 1);
    } else {
      setFinished(true);
    }
  }

  function prev() {
    if (index > 0) setIndex(i => i - 1);
  }

  function restart() {
    setIndex(0);
    setAnswers([]);
    setFinished(false);
  }

  const correctCount = answers.reduce((acc, a, i) => {
    return acc + (a === data[i].answer ? 1 : 0);
  }, 0);

  return (
    <QuizLayout>
      {!finished ? (
        <QuestionCard
          question={current}
          progress={(index / data.length) * 100}
          selected={answers[index]}
          onSelect={selectAnswer}
          onNext={next}
          onPrev={prev}
          isLast={index === data.length - 1}
        />
      ) : (
        <Result
          score={Math.round((correctCount / data.length) * 100)}
          onRestart={restart}
        />
      )}
    </QuizLayout>
  );
}

export default App;
