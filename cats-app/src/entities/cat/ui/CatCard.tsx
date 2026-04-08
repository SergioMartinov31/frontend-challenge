import type { Cat } from "@/entities/cat/model/types";
import { LikeButton } from "@/features/favorite-cat/ui/LikeButton";
import type { RootState } from "@/app/providers/store/store";
import { useSelector } from "react-redux";
import styles from "./CatCard.module.scss";

type CatCardProps = {
  cat: Cat
}

export const CatCard = ({cat} : CatCardProps) => {
  const isLiked = useSelector((state: RootState) =>
    state.likes.cats.some((favoriteCat) => favoriteCat.id === cat.id)
  );

  return (
    <div className={styles.cardSlot}>
      <article className={`${styles.card} ${isLiked ? styles.liked : ""}`}>
        <img
          className={styles.image}
          src={cat.url}
          alt={`Cat ${cat.id}`}
          width={225}
          height={225}
          loading="lazy"
        />
        <div className={styles.likeButton}>
          <LikeButton cat={cat} />
        </div>
      </article>
    </div>
  )
}
