import { useCallback, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { setSearchValue } from '../../redux/reducers/filterSlice';
import debounce from 'lodash.debounce';
import styles from './Search.module.css';
import clear from '../../assets/clear.svg';

export const Search = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const debounceSearch = useCallback(
    debounce((value) => dispatch(setSearchValue(value)), 500),
    []
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    debounceSearch(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.search}
        value={value}
        onChange={onChangeInput}
        type='text'
        name='search'
        placeholder='Find your favorite game...'
      />
      {value && (
        <button className={styles.clear} type='button'>
          <img className={styles.icon} src={clear} alt='clear input'/>
        </button>
      )}
    </div>
  );
};
