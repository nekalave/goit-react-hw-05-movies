import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { getMovieDetails } from '../../services/Api';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/goit-react-hw-05-movies/movies';


  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovieDetails(id);
      setDetails(data);
    };

    fetchData();
  }, [id]);

  return (
    <section className={css.section}>
      <NavLink to={backLinkHref}>
        <button>Go back</button>
      </NavLink>
      <div className={css.detailsWrapper}>
        <img className={css.img} alt={details.title}
             src={`https://image.tmdb.org/t/p/original/${details.poster_path}`} />
        <div>
          <h2>{details.title} ({details.release_date})</h2>
          <span>User score:{details.vote_average}</span>
          <h3>Overview</h3>
          <span>{details.overview}</span>
          <h3>Genres</h3>
          <span>
            {details.genres?.length > 0
              ? details.genres.map((genre) => genre.name).join(', ')
              : 'No genres available'}
          </span>
        </div>
      </div>
      <div className={css.navWrapper}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink className={css.navLink} to='cast' state={{ from: backLinkHref }}>Cast</NavLink>
          </li>
          <li>
            <NavLink className={css.navLink} to='review' state={{ from: backLinkHref }}>Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MovieDetails;
