import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { QuestionPage } from './components/QuestionPage';
import { JoinGamePage } from './components/JoinGamePage';
import { Player } from './components/FantasyLeaderboard';

interface PlayerAnswer {
  playerId: string;
  questionId: string;
  isCorrect: boolean;
  points: number;
}

export default function App() {
  const [players, setPlayers] = useState<Player[]>(() => {
    const saved = localStorage.getItem('rune-players');
    return saved ? JSON.parse(saved) : [];
  });

  const [answers, setAnswers] = useState<PlayerAnswer[]>(() => {
    const saved = localStorage.getItem('rune-answers');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('rune-players', JSON.stringify(players));
  }, [players]);

  useEffect(() => {
    localStorage.setItem('rune-answers', JSON.stringify(answers));
  }, [answers]);

  const handleJoinGame = (playerName: string): string => {
    const playerId = `player-${Date.now()}`;

    setPlayers((prev) => [
      ...prev,
      {
        id: playerId,
        name: playerName,
        score: 0,
        answeredQuestions: 0,
      },
    ]);

    return playerId;
  };

  const handleAnswer = (
    playerId: string,
    playerName: string,
    questionId: string,
    isCorrect: boolean,
    points: number
  ) => {
    // Check if player already answered this question
    const existingAnswer = answers.find(
      (a) => a.playerId === playerId && a.questionId === questionId
    );

    if (existingAnswer) {
      // Player already answered this question, don't record again
      return;
    }

    // Record the answer
    setAnswers((prev) => [...prev, { playerId, questionId, isCorrect, points }]);

    // Update player score
    setPlayers((prev) =>
      prev.map((p) =>
        p.id === playerId
          ? {
              ...p,
              score: p.score + points,
              answeredQuestions: p.answeredQuestions + 1,
            }
          : p
      )
    );
  };

  const handleResetGame = () => {
    setPlayers([]);
    setAnswers([]);
    localStorage.removeItem('rune-players');
    localStorage.removeItem('rune-answers');
    sessionStorage.clear();
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage players={players} onResetGame={handleResetGame} />} />
        <Route
          path="/join"
          element={
            <JoinGamePage
              existingPlayers={players.map((p) => ({ id: p.id, name: p.name }))}
              onJoin={handleJoinGame}
            />
          }
        />
        <Route
          path="/question/:questionId"
          element={
            <QuestionPage
              onAnswer={handleAnswer}
              players={players.map((p) => ({ id: p.id, name: p.name }))}
              answeredQuestions={answers.map((a) => ({ playerId: a.playerId, questionId: a.questionId }))}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}