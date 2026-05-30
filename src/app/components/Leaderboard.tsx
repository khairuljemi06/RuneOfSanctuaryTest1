import { Trophy, Medal, Crown } from 'lucide-react';

export interface Student {
  id: number;
  name: string;
  score: number;
  answeredQuestions: number;
}

interface LeaderboardProps {
  students: Student[];
}

export function Leaderboard({ students }: LeaderboardProps) {
  const sortedStudents = [...students].sort((a, b) => b.score - a.score);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Medal className="w-6 h-6 text-orange-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-2xl bg-card border border-border rounded-lg p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="w-6 h-6 text-chart-1" />
        <h2 className="text-foreground">Papan Pendahulu</h2>
      </div>

      <div className="space-y-2">
        {sortedStudents.map((student, index) => {
          const rank = index + 1;
          return (
            <div
              key={student.id}
              className={`flex items-center justify-between p-4 rounded-lg ${
                rank === 1
                  ? 'bg-yellow-50 border-2 border-yellow-400'
                  : rank === 2
                  ? 'bg-gray-50 border-2 border-gray-300'
                  : rank === 3
                  ? 'bg-orange-50 border-2 border-orange-300'
                  : 'bg-muted'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10">
                  {getRankIcon(rank) || (
                    <span className="text-muted-foreground">#{rank}</span>
                  )}
                </div>
                <div>
                  <p className="text-foreground">{student.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {student.answeredQuestions} soalan dijawab
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-foreground">
                  {student.score} markah
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
