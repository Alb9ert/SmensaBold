import { usePremierLeagueStandings } from "../hooks/usePremierLeagueStandings";
import { LeagueTable } from "../components/shadcn/premier-league-table";

const Home = () => {
  const { data, isLoading, isError, error } = usePremierLeagueStandings();

  if (isLoading) return <div>Loading standings...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;

  const teamStandings = data?.teamStandings ?? [];

  return (
    <>
      <div className="mt-20 w-full flex justify-center items-center">
        <LeagueTable teamStandings={teamStandings} />
      </div>
    </>
  );
};

export default Home;
