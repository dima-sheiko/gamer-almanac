import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchGames } from '../../redux/reducers/gamesSlice';
import { Card } from '../Card/Card';

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
    <div>
      {content.map((game) => (
        <Card key={game.id} game={game} />
      ))}
    </div>
  );
};
