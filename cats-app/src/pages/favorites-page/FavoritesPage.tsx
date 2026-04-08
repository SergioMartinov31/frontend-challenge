import { useSelector } from "react-redux";
import type { RootState } from "@/app/providers/store/store";
import { CatCard } from "@/entities/cat/ui";
import styles from "./FavoritesPage.module.scss";

export const FavoritesPage = () => {
  const favoriteCats = useSelector((state: RootState) => state.likes.cats);

  if (favoriteCats.length === 0) {
    return (
      <div className={styles.emptyState}>
        Тут пока пусто. Добавь котиков в избранное на вкладке "Все котики".
      </div>
    );
  }

  return (
    <div className={styles.cardLayout}>
      {favoriteCats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}
    </div>
  );
}
