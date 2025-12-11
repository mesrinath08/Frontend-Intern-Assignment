const QuizLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-figma">
      <div className="w-[1100px] max-w-full">
        {children}
      </div>
    </div>
  );
};

export default QuizLayout;
