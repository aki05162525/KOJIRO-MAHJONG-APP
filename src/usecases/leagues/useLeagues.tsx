import type { League } from "@/domain/league";
import { fetcher } from "@/infra/api/client";
import useSWR from "swr";

export const useLeagues = () => {
  const { data, error, isLoading } = useSWR<League[]>("/api/leagues", fetcher);

  return {
    leagues: data || [],
    isLoading,
    isError: error,
  };
};
