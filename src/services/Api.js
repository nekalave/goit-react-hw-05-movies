import axios from 'axios';

export const getTrending = async function() {
  const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`, {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmU2MDZkMzYzYTU4MDNiZTFmYzBhNmJiNGQ5MmMwNyIsIm5iZiI6MTcyMDEyODM4MC42NTQ1MTEsInN1YiI6IjY2ODcxMjQ1MDFmYmYxZGEzYzMxYzEwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YAhxat5el4pfDouUFAd9d_ChXv9wbjRcsY2LNN2mtp8'
    },
  });
  return response.data.results;
};

export const getMovieDetails = async function(id) {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmU2MDZkMzYzYTU4MDNiZTFmYzBhNmJiNGQ5MmMwNyIsIm5iZiI6MTcyMDEyODM4MC42NTQ1MTEsInN1YiI6IjY2ODcxMjQ1MDFmYmYxZGEzYzMxYzEwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YAhxat5el4pfDouUFAd9d_ChXv9wbjRcsY2LNN2mtp8'
    },
  });
  return response.data;
};

export const getMovieCredits = async function(id) {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmU2MDZkMzYzYTU4MDNiZTFmYzBhNmJiNGQ5MmMwNyIsIm5iZiI6MTcyMDEyODM4MC42NTQ1MTEsInN1YiI6IjY2ODcxMjQ1MDFmYmYxZGEzYzMxYzEwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YAhxat5el4pfDouUFAd9d_ChXv9wbjRcsY2LNN2mtp8'
    },
  });
  return response.data.cast;
};

export const getMovieReviews  = async function(id) {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmU2MDZkMzYzYTU4MDNiZTFmYzBhNmJiNGQ5MmMwNyIsIm5iZiI6MTcyMDEyODM4MC42NTQ1MTEsInN1YiI6IjY2ODcxMjQ1MDFmYmYxZGEzYzMxYzEwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YAhxat5el4pfDouUFAd9d_ChXv9wbjRcsY2LNN2mtp8'
    },
  });
  return response.data.results;
};

export const searchMovies  = async function(value) {
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1`, {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmU2MDZkMzYzYTU4MDNiZTFmYzBhNmJiNGQ5MmMwNyIsIm5iZiI6MTcyMDEyODM4MC42NTQ1MTEsInN1YiI6IjY2ODcxMjQ1MDFmYmYxZGEzYzMxYzEwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YAhxat5el4pfDouUFAd9d_ChXv9wbjRcsY2LNN2mtp8'
    },
  });
  return response.data.results;
};
