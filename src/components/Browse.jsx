import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovie from '../hooks/usePopularMovie';
import useUpcomingMovie from '../hooks/useUpcomingMovie';
import GptSearch from './GptSearch';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    useNowPlayingMovies();
    usePopularMovie();
    useUpcomingMovie();
  return (
    <div>
        <Header/>
        {showGptSearch ? ( 
          <GptSearch/> 
        ): (
          <>
           <MainContainer/>
           <SecondaryContainer/>
          </>
         ) }
    </div>
  )
}

export default Browse;