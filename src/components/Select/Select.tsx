import { AnyAction } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../hooks/redux';

type Options = {
  id: number;
  name: string;
  value: string;
};

type SelectProps = {
  id: string;
  name: string;
  label: string;
  options: Options[];
  setValue: (e: string) => AnyAction;
};

export const Select = ({ id, name, label, options, setValue }: SelectProps) => {
  const dispatch = useAppDispatch();

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setValue(e.target.value));
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select name={name} id={id} onChange={onChangeSelect}>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
