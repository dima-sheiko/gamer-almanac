import { useEffect } from 'react';
import { HashLoader } from 'react-spinners';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchGames } from '../../redux/reducers/gamesSlice';
import { Card } from '../Card/Card';
import styles from './CardsContainer.module.css';

export const CardsContainer = () => {
  const { games, error, isLoading } = useAppSelector((state) => state.games);
  const { searchValue, filterParam, sortParam } = useAppSelector(
    (state) => state.filter
  );

  const dispatch = useAppDispatch();

  const getGames = async () => {
    dispatch(fetchGames({ filterParam, sortParam }));
  };

  useEffect(() => {
    getGames();
  }, [filterParam, sortParam]);

  const content = games.filter((game) =>
    game.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className={styles.card_container}>
      {isLoading && (
        <div className={styles.loader}>
          <HashLoader color='#464646' />
        </div>
      )}
      {content.map((game) => (
        <Card key={game.id} game={game} />
      ))}
      {error ? <h3 className={styles.error}>Something went wrong...</h3> : ''}
    </div>
  );
};
