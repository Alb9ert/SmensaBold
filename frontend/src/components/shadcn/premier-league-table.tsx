import type { Form, TableStandings } from "../../types/premTypes";

function FormBadge({ match }: { match: Form }) {
  const bgColor =
    match.symbol === "W" ? "bg-green-600" : match.symbol === "D" ? "bg-orange-500" : match.symbol === "L" ? "bg-red-600" : "bg-gray-600";

  return (
    <div className="relative group">
      <div className={`${bgColor} w-8 h-8 rounded-md flex items-center justify-center text-white text-sm font-bold cursor-pointer`}>
        {match.symbol}
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2.5 bg-[#2a3544] text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-lg min-w-[200px] text-center">
        {match.homeScore}:{match.awayScore} ({match.homeTeam} - {match.awayTeam})
      </div>
    </div>
  );
}

export function LeagueTable({ teamStandings }: TableStandings) {
  const getRankColor = (index: number) => {
    if (index === 0) return "bg-blue-600";
    if (index <= 2) return "bg-blue-700";
    if (index === 3) return "bg-blue-800";
    if (index === 4) return "bg-purple-900";
    return "bg-transparent";
  };

  return (
    <div className="w-full bg-[#0d1117] text-white rounded-lg overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-[50px_minmax(180px,1fr)_60px_60px_60px_60px_80px_70px_280px] gap-3 px-4 py-3 border-b border-gray-800 text-sm font-semibold text-gray-300 uppercase">
        <div className="flex items-center">
          #<span className="ml-1 text-xs">▲</span>
        </div>
        <div>HOLD</div>
        <div className="text-center">KS</div>
        <div className="text-center">V</div>
        <div className="text-center">U</div>
        <div className="text-center">T</div>
        <div className="text-center">M</div>
        <div className="text-center">MF</div>
        <div className="text-center">FORM</div>
      </div>

      {/* Table Rows */}
      {teamStandings.map((team, index) => (
        <div
          key={index}
          className="grid grid-cols-[50px_minmax(180px,1fr)_60px_60px_60px_60px_80px_70px_280px] gap-3 px-4 py-3.5 border-b border-gray-800/50 hover:bg-gray-900/30 transition-colors items-center"
        >
          <div className={`flex items-center justify-center w-9 h-9 rounded ${getRankColor(index)} font-bold text-sm`}>{index + 1}.</div>

          {/* Team */}
          <div className="flex items-center gap-3 min-w-0">
            <img src={team.imgUrl || "/placeholder.svg"} alt={team.teamName} width={28} height={28} className="flex-shrink-0" />
            <span className="font-medium text-base">{team.teamName}</span>
          </div>

          {/* Games Played */}
          <div className="text-center font-medium">{team.gamesPlayed}</div>

          {/* Wins */}
          <div className="text-center font-medium">{team.wins}</div>

          {/* Draws */}
          <div className="text-center font-medium">{team.draws}</div>

          {/* Losses */}
          <div className="text-center font-medium">{team.loses}</div>

          {/* Goals */}
          <div className="text-center font-medium">{team.goals}</div>

          {/* Goal Difference */}
          <div className="text-center font-medium">{team.goalDifference}</div>

          <div className="flex gap-1.5 justify-center">
            {team.form.slice(0, 5).map((match, i) => (
              <FormBadge key={i} match={match} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
