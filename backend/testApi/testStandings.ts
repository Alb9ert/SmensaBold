const apiKey = "";
const baseUrl = "https://api.sportdb.dev";

const standingsUrl = "https://api.sportdb.dev/api/flashscore/football/england:198/premier-league:dYlOSQOD/2025-2026/standings";

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: { "X-API-Key": apiKey },
  });
  if (!res.ok) throw new Error(`Fetch error ${res.status}: ${url}`);
  return res.json();
}

async function run() {
  console.log("Fetching standings...");
  const standings = await fetchJson(standingsUrl);

  for (const team of standings) {
    const teamApiURL = baseUrl + team.teamUrl;
    console.log(`\n🔍 Fetching team: ${team.teamName} -> ${teamApiURL}`);

    try {
      const teamData = await fetchJson(teamApiURL);

      // Some team responses have an array with the logo inside index 0
      const logo = teamData?.teamLogo || teamData[0]?.teamLogo;

      console.log(`🏷 Team: ${team.teamName}`);
      console.log(`🖼 Logo: ${logo || "NO LOGO FOUND"}`);
    } catch (err) {
      console.error(`❌ Failed to fetch team data for: ${team.teamName}`, err);
    }
  }

  console.log("\n✔ Finished!");
}

run().catch(console.error);
