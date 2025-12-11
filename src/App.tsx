import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import Option from "./components/Option";
import Result from "./components/Result";

const App = () => {
  const [index, setIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState<boolean>(false);

  const handleNext = () => {
    setIndex((i: number) => i + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex((i: number) => i - 1);
  };

  const handleAnswer = (value: number) => {
    setAnswers((prev) => [...prev, value]);
  };

  const correctCount = answers.reduce(
    (acc: number, a: number) => acc + (a === 1 ? 1 : 0),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {!finished ? (
        <QuestionCard>
          {/* Example usage */}
          <Option value={1} onClick={handleAnswer} />
          <div className="flex justify-between mt-4">
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </QuestionCard>
      ) : (
        <Result correct={correctCount} total={answers.length} />
      )}
    </div>
  );
};

export default App;
