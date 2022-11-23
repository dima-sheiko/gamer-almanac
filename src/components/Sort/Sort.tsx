import { useAppDispatch } from '../../hooks/redux';
import { setSortParam } from '../../redux/reducers/filterSlice';

type Options = {
  id: number;
  name: string;
  value: 'title' | 'developer' | 'year';
};

export const Sort = () => {
  const dispatch = useAppDispatch();

  const options: Options[] = [
    { id: 1, name: 'Title', value: 'title' },
    { id: 2, name: 'Developer', value: 'developer' },
    { id: 3, name: 'Year', value: 'year' },
  ];

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortParam(e.target.value));
  };

  return (
    <div>
      <select name='sort' onChange={onChangeSelect}>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
