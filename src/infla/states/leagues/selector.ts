import type { RootState } from "@/infla/store";

export const leaguesSelector = (state: RootState) => ({
  leagues: state.leagues.leagues,
  loading: state.leagues.loading,
});
