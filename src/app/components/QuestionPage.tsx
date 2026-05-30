import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle2, XCircle, Sparkles, ArrowLeft, AlertCircle } from 'lucide-react';
import { questions, Question } from '../data/questions';

interface QuestionPageProps {
  onAnswer: (playerId: string, playerName: string, questionId: string, isCorrect: boolean, points: number) => void;
  players: { id: string; name: string }[];
  answeredQuestions: { playerId: string; questionId: string }[];
}

export function QuestionPage({ onAnswer, players, answeredQuestions }: QuestionPageProps) {
  const { questionId } = useParams<{ questionId: string }>();
  const navigate = useNavigate();
  const [currentPlayer, setCurrentPlayer] = useState<{ id: string; name: string } | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [alreadyAnswered, setAlreadyAnswered] = useState(false);

  const question = questions.find((q) => q.id === questionId);

  useEffect(() => {
    // Check if player is logged in
    const playerId = sessionStorage.getItem('currentPlayerId');
    const playerName = sessionStorage.getItem('currentPlayerName');

    if (playerId && playerName) {
      setCurrentPlayer({ id: playerId, name: playerName });

      // Check if this player already answered this question
      const hasAnswered = answeredQuestions.some(
        (a) => a.playerId === playerId && a.questionId === questionId
      );
      setAlreadyAnswered(hasAnswered);
    } else {
      setCurrentPlayer(null);
    }

    setSelectedAnswer(null);
    setShowResult(false);
  }, [questionId, answeredQuestions]);

  // Show login prompt if player not registered
  if (!currentPlayer) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 max-w-md text-center border-2 border-yellow-500/50">
          <AlertCircle className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-white text-2xl mb-3">Please Join First</h2>
          <p className="text-purple-300 mb-6">You need to register your name before answering questions</p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => navigate('/join')}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg transition-all font-semibold"
            >
              Join Game
            </button>
            <button
              onClick={() => navigate('/')}
              className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!question) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="bg-slate-800 rounded-2xl p-8 max-w-md text-center border-2 border-red-500">
          <h2 className="text-white text-2xl mb-4">Question Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Return to Leaderboard
          </button>
        </div>
      </div>
    );
  }

  // Show already answered message
  if (alreadyAnswered && !showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 max-w-md text-center border-2 border-blue-500/50">
          <CheckCircle2 className="w-16 h-16 text-blue-400 mx-auto mb-4" />
          <h2 className="text-white text-2xl mb-3">Already Answered</h2>
          <p className="text-purple-300 mb-6">You have already answered this question!</p>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg transition-all font-semibold"
          >
            Return to Leaderboard
          </button>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: Question['difficulty']) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'hard':
        return 'bg-purple-500';
      case 'veryhard':
        return 'bg-red-500';
    }
  };

  const getDifficultyLabel = (difficulty: Question['difficulty']) => {
    switch (difficulty) {
      case 'easy':
        return 'Easy';
      case 'medium':
        return 'Medium';
      case 'hard':
        return 'Hard';
      case 'veryhard':
        return 'Very Hard';
    }
  };

  const handleAnswerClick = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    if (!currentPlayer) return;

    const isCorrect = selectedAnswer === question.correctAnswer;
    onAnswer(currentPlayer.id, currentPlayer.name, question.id, isCorrect, isCorrect ? question.points : 0);
    setShowResult(true);
  };

  const handleReturnToLeaderboard = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Back Button */}
        <button
          onClick={handleReturnToLeaderboard}
          className="mb-4 flex items-center gap-2 text-purple-300 hover:text-purple-100 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Leaderboard
        </button>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl border-2 border-purple-500/30">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <h2 className="text-white text-xl">Rune Challenge</h2>
            </div>
            <div className={`${getDifficultyColor(question.difficulty)} px-4 py-2 rounded-full text-white text-sm font-semibold`}>
              {getDifficultyLabel(question.difficulty)} • +{question.points} pts
            </div>
          </div>

          {/* Current Player Display */}
          {!showResult && currentPlayer && (
            <div className="mb-6 bg-gradient-to-r from-purple-700/30 to-indigo-700/30 rounded-xl p-4 border border-purple-500/50">
              <p className="text-purple-300 text-sm mb-1">Answering as:</p>
              <p className="text-white font-semibold text-lg">{currentPlayer.name}</p>
            </div>
          )}

          {/* Question */}
          <div className="mb-6">
            <p className="text-white text-lg mb-6">{question.question}</p>

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
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                      shouldShowCorrect
                        ? 'bg-green-500/20 border-green-500 text-green-100'
                        : shouldShowWrong
                        ? 'bg-red-500/20 border-red-500 text-red-100'
                        : isSelected
                        ? 'bg-purple-600 text-white border-purple-400'
                        : 'bg-slate-700 border-slate-600 text-slate-200 hover:border-purple-400 hover:bg-slate-600'
                    } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {shouldShowCorrect && <CheckCircle2 className="w-6 h-6 text-green-400" />}
                      {shouldShowWrong && <XCircle className="w-6 h-6 text-red-400" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Submit / Results */}
          {!showResult ? (
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold transition-all shadow-lg"
            >
              Submit Answer
            </button>
          ) : (
            <div className="space-y-4">
              <div className={`text-center p-6 rounded-xl ${
                selectedAnswer === question.correctAnswer
                  ? 'bg-green-500/20 border-2 border-green-500'
                  : 'bg-red-500/20 border-2 border-red-500'
              }`}>
                <p className={`text-2xl mb-2 ${
                  selectedAnswer === question.correctAnswer ? 'text-green-300' : 'text-red-300'
                }`}>
                  {selectedAnswer === question.correctAnswer ? '✓ Correct!' : '✗ Incorrect'}
                </p>
                <p className="text-white">
                  {selectedAnswer === question.correctAnswer
                    ? `You earned ${question.points} points!`
                    : 'Better luck next time!'}
                </p>
              </div>
              <button
                onClick={handleReturnToLeaderboard}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold transition-all"
              >
                View Leaderboard
              </button>
            </div>
          )}
        </div>

        {/* QR Code Info */}
        <div className="mt-4 text-center text-purple-300 text-sm">
          <p>Question ID: {question.id}</p>
          <p className="mt-1">Share this URL to generate QR codes for this question</p>
        </div>
      </div>
    </div>
  );
}
