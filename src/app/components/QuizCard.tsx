import { Trophy, CheckCircle2, XCircle } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizCardProps {
  question: Question;
  onAnswer: (isCorrect: boolean, questionId: number) => void;
  selectedAnswer: number | null;
  showResult: boolean;
}

export function QuizCard({ question, onAnswer, selectedAnswer, showResult }: QuizCardProps) {
  const handleAnswerClick = (index: number) => {
    if (showResult) return;
    const isCorrect = index === question.correctAnswer;
    onAnswer(isCorrect, question.id);
  };

  return (
    <div className="w-full max-w-2xl bg-card border border-border rounded-lg p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="w-5 h-5 text-chart-1" />
        <h3 className="text-foreground">Soalan {question.id}</h3>
      </div>

      <p className="mb-6 text-foreground">{question.question}</p>

      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = index === question.correctAnswer;
          const shouldShowCorrect = showResult && isCorrect;
          const shouldShowWrong = showResult && isSelected && !isCorrect;

          return (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              disabled={showResult}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                shouldShowCorrect
                  ? 'bg-green-50 border-green-500 text-green-900'
                  : shouldShowWrong
                  ? 'bg-red-50 border-red-500 text-red-900'
                  : isSelected
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-muted border-border hover:border-primary hover:bg-accent'
              } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {showResult && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                {showResult && shouldShowWrong && <XCircle className="w-5 h-5 text-red-600" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
