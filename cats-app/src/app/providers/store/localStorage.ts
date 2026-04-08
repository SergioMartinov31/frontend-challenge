import type { LikesState } from "@/features/favorite-cat/model/slice";

const FAVORITE_CATS_STORAGE_KEY = "favorite-cats";

export const loadLikesState = (): LikesState | undefined => {
  try {
    const savedState = localStorage.getItem(FAVORITE_CATS_STORAGE_KEY);

    if (!savedState) {
      return undefined;
    }

    return JSON.parse(savedState) as LikesState;
  } catch {
    return undefined;
  }
};

export const saveLikesState = (likesState: LikesState) => {
  try {
    localStorage.setItem(FAVORITE_CATS_STORAGE_KEY, JSON.stringify(likesState));
  } catch {
    // Ignore write errors so the app still works if storage is unavailable.
  }
};
