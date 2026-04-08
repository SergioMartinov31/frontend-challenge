import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Cat } from "@/entities/cat/model/types";

export type LikesState = {
  cats: Cat[];
};

const initialState: LikesState = {
  cats: [],
};

const likesSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    toggleLike(state, action: PayloadAction<Cat>) {
      const cat = action.payload;
      const existingIndex = state.cats.findIndex((item) => item.id === cat.id);

      if (existingIndex !== -1) {
        state.cats.splice(existingIndex, 1);
        return;
      }

      state.cats.unshift(cat);
    },
  },
});

export const { toggleLike } = likesSlice.actions;
export const likesReducer = likesSlice.reducer;
