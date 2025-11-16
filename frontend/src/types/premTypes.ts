export type Form = {
  homeTeam: string;
  awayTeam: string;
  symbol: string;
  homeScore: number;
  awayScore: number;
};

export type TableStandings = {
  teamStandings: TeamStandings[];
};

export type TeamStandings = {
  teamName: string;
  imgUrl: string;
  gamesPlayed: number;
  wins: number;
  loses: number;
  draws: number;
  goals: string; // e.g "20:5"
  goalDifference: number;
  form: Form[];
};
