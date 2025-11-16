export type Event = {
  eventSymbol: string; // e.g. "L", "D", "?"
  eventType: string; // e.g. "loss stage-3", "draw", "upcoming"
  eventId: string; // unique event identifier
  eventHomeParticipantId: string; // home team id
  eventAwayParticipantId: string; // away team id
  eventStartTime: string; // Unix timestamp as string (e.g. "1763769600")
  eventStageId: string; // stage id in tournament
  eventHomeScore: string; // score for home team (empty string if not played)
  eventAwayScore: string; // score for away team (empty string if not played)
  eventHomeParticipantName: string; // home team name
  eventAwayParticipantName: string; // away team name
  eventSwitchedParticipant: string; // "0" or "1", indicates if participants switched sides?
};

export type StandingsFetch = {
  rank: string; // e.g. '20'
  rankClass: string; // e.g. 'r1'
  rankColor: string; // e.g. 'BD0000'
  teamName: string; // e.g. 'Wolves'
  teamId: string; // e.g. 'j3Azpf5d'
  teamUrl: string; // e.g. '/api/flashscore/team/wolves/j3Azpf5d/'
  matches: string; // e.g. '11' (could be number if you want)
  wins: string; // e.g. '0'
  winsRegular: string; // e.g. '0'
  winsOvertime: string; // e.g. '0'
  winsAfterPenalties: string; // e.g. '0'
  winsInOvertimeAfterPenalties: string; // e.g. '0'
  draws: string; // e.g. '2'
  eventTournamentStageCaptionPart2: string; // e.g. '9'
  lossesRegular: string; // e.g. '9'
  lossesOvertime: string; // e.g. '0'
  lossesAfterPenalties: string; // e.g. '0'
  lossesInOvertimeAfterPenalties: string; // e.g. '0'
  againstPctg: string; // e.g. '28.00'
  noResultsMatches: string; // e.g. '0'
  pointsPerMatchesPlayed: string; // e.g. '0.18'
  goalDiff: string; // e.g. '-18'
  goals: string; // e.g. '7:25'
  points: string; // e.g. '2'
  teamSlug: string; // e.g. 'wolves'
  events: Event[]; // Array of event objects
};

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

export const teamLogoMap: Record<string, string> = {
  arsenal: "https://static.flashscore.com/res/image/data/pfchdCg5-vcNAdtF9.png",
  "manchester-city": "https://static.flashscore.com/res/image/data/UXcqj7HG-lQuhqN8N.png",
  chelsea: "https://static.flashscore.com/res/image/data/GMmvDEdM-IROrZEJb.png",
  sunderland: "https://static.flashscore.com/res/image/data/ln86XXjl-0d34NJCO.png",
  tottenham: "https://static.flashscore.com/res/image/data/ARC62UAr-Ig5FKJZ5.png",
  "aston-villa": "https://static.flashscore.com/res/image/data/QsnteKXg-jwz95gs0.png",
  "manchester-united": "https://static.flashscore.com/res/image/data/nwSRlyWg-h2pPXz3k.png",
  liverpool: "https://static.flashscore.com/res/image/data/Gr0cGteM-KCp4zq5F.png",
  bournemouth: "https://static.flashscore.com/res/image/data/2Pb55xWg-tCGtX12c.png",
  "crystal-palace": "https://static.flashscore.com/res/image/data/AFNlsDzS-pzMOQXRe.png",
  brighton: "https://static.flashscore.com/res/image/data/40juIezB-b92lfEJC.png",
  brentford: "https://static.flashscore.com/res/image/data/bBj3NWfM-r9Mudk7j.png",
  everton: "https://static.flashscore.com/res/image/data/EwJqZUZA-bRmKmISE.png",
  "newcastle-utd": "https://static.flashscore.com/res/image/data/fojwJwZA-ImMEe0UF.png",
  fulham: "https://static.flashscore.com/res/image/data/naaAVOzB-ImMEe0UF.png",
  leeds: "https://static.flashscore.com/res/image/data/rsvCPOh5-MTp25XgE.png",
  burnley: "https://static.flashscore.com/res/image/data/UaPJjYBr-6PhTI7J6.png",
  "west-ham": "https://static.flashscore.com/res/image/data/Qo3RdMjl-Q9DJHs4l.png",
  nottingham: "https://static.flashscore.com/res/image/data/GCLLkTzB-ImKwLTtA.png",
  wolves: "https://static.flashscore.com/res/image/data/Iwsrq5xS-CjV6Eptm.png",
};
