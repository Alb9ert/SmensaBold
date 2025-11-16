import { Router, type Request, type Response } from "express";
import fetch from "node-fetch"; // If Node 18+, you can skip this import
import { teamLogoMap, type Form, type StandingsFetch, type TeamStandings } from "../types/premTypes.js";
import type { Event } from "../types/premTypes.js"; // assuming your Event type is here

const router = Router();

function mapEventToForm(event: Event): Form {
  return {
    homeTeam: event.eventHomeParticipantName,
    awayTeam: event.eventAwayParticipantName,
    symbol: event.eventSymbol,
    homeScore: event.eventHomeScore ? Number(event.eventHomeScore) : 0,
    awayScore: event.eventAwayScore ? Number(event.eventAwayScore) : 0,
  };
}

router.get("/standings", async (req: Request, res: Response) => {
  try {
    const apiKey = process.env.SPORTS_DEV!;
    const url = "https://api.sportdb.dev/api/flashscore/football/england:198/premier-league:dYlOSQOD/2025-2026/standings";

    const response = await fetch(url, {
      headers: {
        "X-API-Key": apiKey,
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch data" });
    }

    // Fetch and assert type
    const data = (await response.json()) as StandingsFetch[];

    const teamStandings: TeamStandings[] = data.map((team) => ({
      teamName: team.teamName,
      imgUrl: teamLogoMap[team.teamSlug] ?? "",
      gamesPlayed: Number(team.matches),
      wins: Number(team.wins),
      loses:
        Number(team.lossesRegular) + Number(team.lossesOvertime) + Number(team.lossesAfterPenalties) + Number(team.lossesInOvertimeAfterPenalties),
      draws: Number(team.draws),
      goals: team.goals,
      goalDifference: Number(team.goalDiff),
      form: team.events ? team.events.map(mapEventToForm) : [],
    }));

    // Respond with the mapped and cleaned data
    res.json({ teamStandings });
  } catch (error) {
    console.error("Error fetching standings:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
