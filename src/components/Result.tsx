import React from "react";

export default function Result({ score, onRestart }: { score: number; onRestart: () => void }) {
  return (
    <div className="bg-white rounded-3xl p-12 shadow-soft text-center">
      <div className="mb-6">
        <div className="inline-block px-4 py-1 rounded-sm bg-white border border-[#2c6a77]">
          <h2 className="font-display text-2xl text-[#2c6a77]">Your Final score is</h2>
        </div>
      </div>

      <div className="text-8xl font-display text-[#2c6a77] mb-6">{score}<span className="text-3xl"> %</span></div>

      <button
        className="px-5 py-2 rounded-md bg-[#dff6fa] text-[#0e4c57] font-medium"
        onClick={onRestart}
      >
        Start Again
      </button>
    </div>
  );
}
