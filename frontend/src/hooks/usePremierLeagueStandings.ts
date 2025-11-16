import { useQuery } from "@tanstack/react-query";
import type { TableStandings } from "../types/premTypes";
import api from "../config/api";

export function usePremierLeagueStandings() {
  return useQuery<TableStandings>({
    queryKey: ["prem-standings"],
    queryFn: async () => {
      const res = await api("/prem/standings");

      return res.data as TableStandings;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
}
