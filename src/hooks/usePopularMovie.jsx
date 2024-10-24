import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const usePopularMovie = () =>{
     // Fetch data from TMDB API and update stores.i will create a new custome hook and extract all the logic there .
     const dispatch = useDispatch();
     const getPopularMovies = async () => {
         const data = await fetch(
          'https://api.themoviedb.org/3/movie/popular?page=1',
          API_OPTIONS
         );
         const json = await data.json();
         console.log(json.results);
          dispatch(addPopularMovies(json.results));
     };
     useEffect(() => {
         getPopularMovies();
     }, []);
 
};
export default usePopularMovie;
