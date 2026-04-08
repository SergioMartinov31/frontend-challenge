import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/app/providers/store/store";
import type { Cat } from "@/entities/cat/model/types";
import { toggleLike } from "../model/slice";
import styles from "./LikeButton.module.scss";

type LikeButtonProps = {
  cat: Cat;
};

export const LikeButton = ({ cat } : LikeButtonProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const isLiked = useSelector((state: RootState) =>
    state.likes.cats.some((favoriteCat) => favoriteCat.id === cat.id)
  );

  return (
    <button
      type="button"
      className={`${styles.button} ${isLiked ? styles.liked : ""}`}
      aria-label={isLiked ? "Убрать из избранного" : "Добавить в избранное"}
      onClick={() => dispatch(toggleLike(cat))}
    />
  );
};
