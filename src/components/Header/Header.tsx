import styles from './Header.module.css';

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return <header className={styles.header}>{title}</header>;
};
