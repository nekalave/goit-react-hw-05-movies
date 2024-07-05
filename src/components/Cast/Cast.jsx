import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../services/Api';
import css from './Cast.module.css'

const Cast = () => {

  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovieCredits(id);
      setCast(data);
    };


    fetchData();
  }, [id]);

  return (
    <>
      {cast.length > 0 ? (
        cast.map(item => (
          <ul key={item.cast_id}>
            <img className={css.actorImg} src={`https://image.tmdb.org/t/p/original/${item.profile_path}`} alt={item.name} />
            <li><span>{item.name}</span></li>
            <span>Character: {item.character}</span>
          </ul>
        ))
      ) : (
        <p>No cast information available.</p>
      )}
    </>
  );
};

export default Cast
