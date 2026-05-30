import { FantasyLeaderboard, Player } from './FantasyLeaderboard';
import { RotateCcw, QrCode, Sparkles, UserPlus, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface HomePageProps {
  players: Player[];
  onResetGame: () => void;
}

export function HomePage({ players, onResetGame }: HomePageProps) {
  const navigate = useNavigate();
  const [currentPlayer, setCurrentPlayer] = useState<{ id: string; name: string } | null>(null);

  useEffect(() => {
    const playerId = sessionStorage.getItem('currentPlayerId');
    const playerName = sessionStorage.getItem('currentPlayerName');
    if (playerId && playerName) {
      setCurrentPlayer({ id: playerId, name: playerName });
    }
  }, []);

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset the game? All progress will be lost.')) {
      sessionStorage.clear();
      setCurrentPlayer(null);
      onResetGame();
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    setCurrentPlayer(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex flex-col items-center justify-center p-4 py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Sparkles className="w-10 h-10 text-yellow-400 animate-pulse" />
          <h1 className="text-white text-4xl md:text-5xl" style={{ fontFamily: 'serif' }}>
            Rune of the Sanctuary
          </h1>
          <Sparkles className="w-10 h-10 text-yellow-400 animate-pulse" />
        </div>
        <p className="text-purple-300 text-lg">Inorganic Chemistry • Coordination Number Quest</p>
      </div>

      {/* Leaderboard */}
      <FantasyLeaderboard players={players} />

      {/* Current Player Status */}
      {currentPlayer && (
        <div className="mt-6 bg-gradient-to-r from-purple-700 to-indigo-700 rounded-xl p-4 border border-purple-400 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-200 text-sm">Logged in as</p>
              <p className="text-white font-semibold text-lg">{currentPlayer.name}</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-800 text-white px-4 py-2 rounded-lg transition-all text-sm"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        {!currentPlayer ? (
          <button
            onClick={() => navigate('/join')}
            className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg text-lg"
          >
            <UserPlus className="w-6 h-6" />
            Join Game
          </button>
        ) : (
          <div className="text-center">
            <p className="text-purple-300 mb-3">You're ready to play!</p>
            <p className="text-purple-200 text-sm">Scan any QR code to answer questions</p>
          </div>
        )}

        <button
          onClick={handleReset}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg"
        >
          <RotateCcw className="w-5 h-5" />
          Reset Game
        </button>
      </div>

      {/* Instructions */}
      <div className="mt-12 max-w-2xl bg-slate-800/50 rounded-2xl p-6 border border-purple-500/30">
        <div className="flex items-center gap-2 mb-4">
          <QrCode className="w-6 h-6 text-purple-400" />
          <h3 className="text-white text-xl">How to Play</h3>
        </div>
        <div className="text-purple-200 space-y-2 text-sm">
          <p>1. Each card has a QR code linking to a specific question</p>
          <p>2. Scan the QR code to access the question on your device</p>
          <p>3. Select your name and answer the question</p>
          <p>4. Earn points based on difficulty:</p>
          <div className="ml-6 space-y-1">
            <p><span className="inline-block w-20 bg-green-500 text-white px-2 py-1 rounded text-xs mr-2">Easy</span> +2 points</p>
            <p><span className="inline-block w-20 bg-yellow-500 text-white px-2 py-1 rounded text-xs mr-2">Medium</span> +3 points</p>
            <p><span className="inline-block w-20 bg-purple-500 text-white px-2 py-1 rounded text-xs mr-2">Hard</span> +4 points</p>
            <p><span className="inline-block w-20 bg-red-500 text-white px-2 py-1 rounded text-xs mr-2">Very Hard</span> +5 points</p>
          </div>
          <p className="pt-2">5. Check the leaderboard to see your ranking!</p>
        </div>
      </div>

      {/* Question URLs for QR Generation */}
      <div className="mt-8 max-w-4xl w-full bg-slate-800/50 rounded-2xl p-6 border border-purple-500/30">
        <h3 className="text-white text-xl mb-4">Question URLs for QR Code Generation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          {/* Easy Questions */}
          <div className="col-span-full">
            <p className="text-green-400 font-semibold mb-2">Easy Questions (+2 pts)</p>
          </div>
          {Array.from({ length: 8 }, (_, i) => (
            <div key={`easy-${i + 1}`} className="bg-slate-700 p-3 rounded-lg">
              <p className="text-purple-300 mb-1">Easy Question {i + 1}</p>
              <p className="text-slate-400 text-xs break-all">
                {window.location.origin}/question/easy-{i + 1}
              </p>
            </div>
          ))}

          {/* Medium Questions */}
          <div className="col-span-full mt-4">
            <p className="text-yellow-400 font-semibold mb-2">Medium Questions (+3 pts)</p>
          </div>
          {Array.from({ length: 7 }, (_, i) => (
            <div key={`medium-${i + 1}`} className="bg-slate-700 p-3 rounded-lg">
              <p className="text-purple-300 mb-1">Medium Question {i + 1}</p>
              <p className="text-slate-400 text-xs break-all">
                {window.location.origin}/question/medium-{i + 1}
              </p>
            </div>
          ))}

          {/* Hard Questions */}
          <div className="col-span-full mt-4">
            <p className="text-purple-400 font-semibold mb-2">Hard Questions (+4 pts)</p>
          </div>
          {Array.from({ length: 8 }, (_, i) => (
            <div key={`hard-${i + 1}`} className="bg-slate-700 p-3 rounded-lg">
              <p className="text-purple-300 mb-1">Hard Question {i + 1}</p>
              <p className="text-slate-400 text-xs break-all">
                {window.location.origin}/question/hard-{i + 1}
              </p>
            </div>
          ))}

          {/* Very Hard Questions */}
          <div className="col-span-full mt-4">
            <p className="text-red-400 font-semibold mb-2">Very Hard Questions (+5 pts)</p>
          </div>
          {Array.from({ length: 7 }, (_, i) => (
            <div key={`veryhard-${i + 1}`} className="bg-slate-700 p-3 rounded-lg">
              <p className="text-purple-300 mb-1">Very Hard Question {i + 1}</p>
              <p className="text-slate-400 text-xs break-all">
                {window.location.origin}/question/veryhard-{i + 1}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
