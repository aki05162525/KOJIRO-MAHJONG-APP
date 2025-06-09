import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLeagues = createAsyncThunk(
  "leagues/fetchLeagues",
  async () => {
    const response = await fetch("/api/leagues");
    return response.json();
  }
);
