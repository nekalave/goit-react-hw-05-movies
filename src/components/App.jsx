import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Header from './Header/Header';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Review = lazy(() => import('./Review/Review'));
const Cast = lazy(() => import('./Cast/Cast'));

const App = () => {
  return (
    <Routes>
      <Route path='/goit-react-hw-05-movies/' element={<Header />}>
        <Route index element={<Home />} />
        <Route path='/goit-react-hw-05-movies/movies' element={<Movies />} />
        <Route path='/goit-react-hw-05-movies/movies/:id' element={<MovieDetails />}>
          <Route path='cast' element={<Cast />} />
          <Route path='review' element={<Review />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
