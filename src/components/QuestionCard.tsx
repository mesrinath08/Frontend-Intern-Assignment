import Option from "./Option";

type Q = {
  id: number;
  q: string;
  choices: string[];
  answer: number;
};

export default function QuestionCard({
  question,
  progress,
  selected,
  onSelect,
  onNext,
  onPrev,
  isLast
}: {
  question: Q;
  progress: number;
  selected?: number;
  onSelect: (i: number) => void;
  onNext: () => void;
  onPrev: () => void;
  isLast: boolean;
}) {
  return (
    <div className="bg-white rounded-3xl p-10 shadow-soft">
      <div className="text-center mb-6">
        <h1 className="font-display text-5xl text-[#2c6a77]">Test Your Knowledge</h1>
        <p className="text-xs text-gray-500 mt-2">Answer all questions to see your results</p>
      </div>

      <div className="mb-6">
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div style={{ width: `${progress}%` }} className="h-full bg-[#123d4a] transition-all duration-500"></div>
        </div>
      </div>

      <div className="bg-[#f3fcff] rounded-xl p-6 border border-[#e2f5f8]">
        <div className="text-center text-sm font-semibold text-slate-700 mb-4">{question.q}</div>
        <div className="space-y-3">
          {question.choices.map((c, i) => (
            <Option
              key={i}
              label={c}
              isSelected={selected === i}
              onClick={() => onSelect(i)}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          className="px-4 py-2 rounded-md border border-gray-200 bg-white text-gray-700"
          onClick={onPrev}
          aria-label="Previous"
        >
          ←
        </button>
        <button
          className="px-5 py-2 rounded-md bg-[#dff6fa] text-[#0e4c57] font-medium"
          onClick={onNext}
          aria-label={isLast ? "Submit" : "Next"}
        >
          {isLast ? "Submit" : "Next →"}
        </button>
      </div>
    </div>
  );
}
