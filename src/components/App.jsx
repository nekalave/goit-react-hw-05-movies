import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import FeedbackPage from './FeedbackPage/FeedbackPage';
import { Fragment } from 'react';
import Home from './Home/Home';
import PhonebookPage from './PhonebookPage/PhonebookPage';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path='/goit-react-hw-02/' element={<Home />} />
        <Route path='/feedback' element={<FeedbackPage />} />
        <Route path='/phonebook' element={<PhonebookPage />} />
      </Routes>
    </Fragment>
  );
};

export default App;
