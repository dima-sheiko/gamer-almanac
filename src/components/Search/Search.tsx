import { useCallback, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { setSearchValue } from '../../redux/reducers/filterSlice';
import debounce from 'lodash.debounce';

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
    <div>
      <input value={value} onChange={onChangeInput} type='text' name='search' />
    </div>
  );
};
