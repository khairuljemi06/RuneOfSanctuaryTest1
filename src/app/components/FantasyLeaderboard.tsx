import { Trophy, Crown, Sparkles } from 'lucide-react';

export interface Player {
  id: string;
  name: string;
  score: number;
  answeredQuestions: number;
}

interface FantasyLeaderboardProps {
  players: Player[];
}

export function FantasyLeaderboard({ players }: FantasyLeaderboardProps) {
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-900 border-yellow-500 shadow-lg shadow-yellow-500/50';
      case 2:
        return 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 border-gray-400 shadow-lg shadow-gray-400/50';
      case 3:
        return 'bg-gradient-to-r from-orange-400 to-orange-600 text-orange-900 border-orange-500 shadow-lg shadow-orange-500/50';
      default:
        return 'bg-gradient-to-r from-slate-700 to-slate-800 text-slate-100 border-slate-600';
    }
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-8 h-8 text-yellow-300 drop-shadow-lg" />;
    if (rank === 2) return <Trophy className="w-7 h-7 text-gray-300" />;
    if (rank === 3) return <Trophy className="w-6 h-6 text-orange-300" />;
    return <Sparkles className="w-5 h-5 text-purple-400" />;
  };

  return (
    <div className="w-full max-w-3xl">
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 rounded-2xl p-8 shadow-2xl border-2 border-purple-500/30">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
            <h1 className="text-white text-3xl" style={{ fontFamily: 'serif' }}>
              Rune of the Sanctuary
            </h1>
            <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-purple-300 text-sm">Leaderboard of Champions</p>
        </div>

        {/* Leaderboard */}
        <div className="space-y-3">
          {sortedPlayers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-purple-300 text-lg">No players yet...</p>
              <p className="text-purple-400 text-sm mt-2">Scan a QR code to begin your quest!</p>
            </div>
          ) : (
            sortedPlayers.map((player, index) => {
              const rank = index + 1;
              return (
                <div
                  key={player.id}
                  className={`${getRankStyle(rank)} rounded-xl p-5 border-2 transition-all duration-300 hover:scale-102`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12">
                        {getRankIcon(rank)}
                      </div>
                      <div>
                        <p className="font-semibold text-lg">{player.name}</p>
                        <p className="text-sm opacity-90">
                          {player.answeredQuestions} runes collected
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">{player.score}</p>
                      <p className="text-xs opacity-90">points</p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Stats */}
        {sortedPlayers.length > 0 && (
          <div className="mt-6 pt-6 border-t border-purple-500/30 text-center">
            <p className="text-purple-300 text-sm">
              {sortedPlayers.length} Champions • Total Points: {sortedPlayers.reduce((sum, p) => sum + p.score, 0)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
