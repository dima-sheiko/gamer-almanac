import { CardsContainer } from './components/CardsContainer/CardsContainer';
import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
import { Select } from './components/Select/Select';
import { setFilterParam, setSortParam } from './redux/reducers/filterSlice';
import { filterOptions } from './utils/FilterOptions';
import { sortOptions } from './utils/SortOptions';
import './styles/styles.css'
import { ScrollUpButton } from './components/ScrollUpButton/ScrollUpButton'

export const App = () => {
  return (
    <div className='container'>
      <Header title='Gamer Almanac' />
      <Search />
      <Select
        id='filter'
        name='filter'
        label='Filter By'
        options={filterOptions}
        setValue={setFilterParam}
      />
      <Select
        id='sort'
        name='sort'
        label='Sort By'
        options={sortOptions}
        setValue={setSortParam}
      />
      <CardsContainer />
     <ScrollUpButton />
    </div>
  );
};
