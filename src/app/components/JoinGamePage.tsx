import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, UserPlus, ArrowLeft } from 'lucide-react';

interface JoinGamePageProps {
  existingPlayers: { id: string; name: string }[];
  onJoin: (playerName: string) => string;
}

export function JoinGamePage({ existingPlayers, onJoin }: JoinGamePageProps) {
  const [playerName, setPlayerName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!playerName.trim()) {
      setError('Please enter your name');
      return;
    }

    // Check if name already exists
    const nameExists = existingPlayers.some(
      (p) => p.name.toLowerCase() === playerName.trim().toLowerCase()
    );

    if (nameExists) {
      setError('This name is already taken. Please choose another name.');
      return;
    }

    // Register player and get their ID
    const playerId = onJoin(playerName.trim());

    // Store player info in sessionStorage so they stay logged in
    sessionStorage.setItem('currentPlayerId', playerId);
    sessionStorage.setItem('currentPlayerName', playerName.trim());

    // Navigate to home
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex flex-col items-center justify-center p-4">
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 flex items-center gap-2 text-purple-300 hover:text-purple-100 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </button>

      <div className="w-full max-w-md">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl border-2 border-purple-500/30">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
              <h1 className="text-white text-2xl" style={{ fontFamily: 'serif' }}>
                Join the Quest
              </h1>
              <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
            </div>
            <p className="text-purple-300 text-sm">Enter your name to begin</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="playerName" className="block text-purple-200 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="playerName"
                value={playerName}
                onChange={(e) => {
                  setPlayerName(e.target.value);
                  setError('');
                }}
                placeholder="Enter your name"
                className="w-full bg-slate-700 text-white border-2 border-purple-500/30 focus:border-purple-500 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                maxLength={30}
              />
              {error && (
                <p className="text-red-400 text-sm mt-2">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-4 rounded-xl font-semibold transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <UserPlus className="w-5 h-5" />
              Join Game
            </button>
          </form>

          {/* Existing Players Info */}
          {existingPlayers.length > 0 && (
            <div className="mt-6 pt-6 border-t border-purple-500/30">
              <p className="text-purple-300 text-sm text-center">
                {existingPlayers.length} {existingPlayers.length === 1 ? 'player' : 'players'} already joined
              </p>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-6 bg-slate-800/50 rounded-xl p-4 border border-purple-500/20">
          <p className="text-purple-200 text-sm text-center">
            After joining, scan any QR code to start answering questions!
          </p>
        </div>
      </div>
    </div>
  );
}
