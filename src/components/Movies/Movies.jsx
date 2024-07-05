import { useEffect, useState } from 'react';
import { searchMovies } from '../../services/Api';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';


const Movies = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      setSearchValue(query);
      const fetchData = async () => {
        const data = await searchMovies(query);
        setSearchData(data);
      };
      fetchData();
    }
  }, [searchParams]);

  const handleChange = evt => {
    const { value } = evt.target;
    setSearchValue(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query: searchValue });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={searchValue}
        />
        <button>Search</button>
      </form>
      <ul>
        {searchData.map(item => (
          <li key={item.id}>
            <NavLink to={`${item.id}`} state={{ from: location }}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
