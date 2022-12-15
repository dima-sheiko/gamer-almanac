import { useEffect, useMemo } from 'react';
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

  useEffect(() => {
    const getGames = () => {
      dispatch(fetchGames({ filterParam, sortParam }));
    };

    getGames();
  }, [filterParam, sortParam]);

  const content = useMemo(
    () =>
      games.filter((game) =>
        game.title.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [games, searchValue]
  );

  return (
    <div className={styles.card_container}>
      {isLoading && (
        <div className={styles.loader}>
          <HashLoader color='#464646' />
        </div>
      )}
      {!isLoading && content.map((game) => <Card key={game.id} game={game} />)}
      {!!error && <h3 className={styles.error}>Something went wrong...</h3>}
    </div>
  );
};
