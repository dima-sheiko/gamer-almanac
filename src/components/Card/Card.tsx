import { TGame } from '../../types/TGame';
import styles from './Card.module.css';

type CardProps = {
  game: TGame;
};

export const Card = ({ game }: CardProps) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.picture} src={game.header} alt='game artwork' />
      <div className={styles.info}>
        <p>{game.title}</p>
        <p>{game.developer}</p>
        <p>{game.genre}</p>
        <p>{game.year}</p>
        <a href={game.link} target='_blank'>
          Get It on Steam
        </a>
      </div>
    </div>
  );
};
