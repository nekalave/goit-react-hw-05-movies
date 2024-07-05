import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../services/Api';


const Review = () => {

  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovieReviews(id);
      setReviews(data);
    };


    fetchData();
  }, [id]);

 return (
   <>
     {reviews.length > 0 ? (
       reviews.map(item => (
         <ul key={item.id}>
           <li><span>{item.author}</span></li>
           <span>{item.content}</span>
         </ul>
       ))
     ) : (
       <p>We dont have any reviews for this movie.</p>
     )}
   </>
 )
}

export default Review
