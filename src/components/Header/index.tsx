import styles from './Header.module.scss';
import stylesTema from 'styles/Tema.module.scss';

interface IHeaderProps {
  children?: React.ReactNode;
}

export const Header = ({ children }: IHeaderProps) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <div className={stylesTema.container}>{children}</div>
    </>
  );
};
