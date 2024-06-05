import { Outlet } from 'react-router-dom';
import styles from './Header.module.scss';
import stylesTema from 'styles/Tema.module.scss';

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
      </div>
    </>
  );
};
