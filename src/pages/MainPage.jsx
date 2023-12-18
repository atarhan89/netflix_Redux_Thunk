import { useEffect } from 'react';
import Hero from '../components/Hero';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, getPopular } from '../redux/actions/movieActions';
import { actionTypes } from '../redux/actionTypes';
import Loading from '../components/Loading';
import MovieList from '../components/MovieList';

const MainPage = () => {
  const state=useSelector((store)=>store)

const  dispatch=useDispatch();
  useEffect(() => {
    //filmler için yuklenıyor state ı aktıf eden actıon
    dispatch({type:actionTypes.SET_MOVIES_LOADING})
    //populer fılmerı al VE STORE A AKTAR
    dispatch(getPopular());
    //turlerı al
    dispatch({type:actionTypes.SET_GENRES_LOADING})
    dispatch(getGenres());
  }, []);
     return (
    <div>
      {/*karsılama*/}
      <Hero />

      {/*kategorıler*/}
      {state.isGenresLoading ? (
        <Loading />
      ) : state.isGenresError ? (
        <p>Üzgünüz hata oluştu</p>
      ) : (
        state.genres.genres?.map((genre) => (
          <MovieList genre={genre} key={genre.id} />
        ))
      )}
    </div>
  );
};

export default MainPage;
