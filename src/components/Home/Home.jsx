import css from '../Home/Home.module.css';
import { getTrending } from '../../services/Api';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Home = () => {
  const [state, setState] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTrending();
      setState(data);
    };

    fetchData();
  }, []);
  return (
    <section className={css.homeSection}>
      <h2>Tending today</h2>
      <ul>
        {state.map(item => (
          <li key={item.id}><NavLink className={css.link} to={`movies/${item.id}`}
                                     state={{ from: location }}>{item.original_title}</NavLink></li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
