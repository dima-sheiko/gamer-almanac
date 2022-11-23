import { useAppDispatch } from '../../hooks/redux';
import { setFilterParam } from '../../redux/reducers/filterSlice';

export const Filter = () => {
  const dispatch = useAppDispatch();

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilterParam(e.target.value));
  };

  return (
    <div>
      <select name='filter' onChange={onChangeSelect}>
        <option value=''>All Genres</option>
        <option value='Action'>Action</option>
        <option value='Shooter'>Shooter</option>
        <option value='RPG'>RPG</option>
        <option value='Metroidvania'>Metroidvania</option>
        <option value='Soulslike'>Soulslike</option>
        <option value='Survival Horror'>Survival Horror</option>
        <option value='Rogue Like'>Rogue Like</option>
        <option value='Quest'>Quest</option>
      </select>
    </div>
  );
};
