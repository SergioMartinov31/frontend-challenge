import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink 
        to="/cats"
        className={({ isActive }) =>
        isActive
          ? `${styles.navButton} ${styles.active}`
          : styles.navButton
      }
      >
        Все котики
      </NavLink>
      <NavLink 
        to="/favorites"
        className={({ isActive }) =>
        isActive
          ? `${styles.navButton} ${styles.active}`
          : styles.navButton
      }
      >
        Любимые котики
      </NavLink>
    </header>
  );
}