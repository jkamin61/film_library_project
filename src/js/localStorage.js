export { storage };
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './openMovieInfoModal';
import './createMovieInfoCard';
import { genreIdToList, createHomeCard, createLibraryCard } from './createCard';
import { openMovieInfoModal } from './openMovieInfoModal';
import { createMovieInfoCard } from './createMovieInfoCard';

import './openMovieInfoModal';
import './createMovieInfoCard';
import { FetchMoveApi } from './FetchMove';
const fetch_movie = new FetchMoveApi();

import { createMovieInfoCard } from './createMovieInfoCard';

//main function
export function handleButtons() {
  const btnWatched = document.querySelector('.movie-info__button--watched');
  const btnQueue = document.querySelector('.movie-info__button--queue');

  btnWatched.addEventListener('click', function () {
    console.log('watched klik');
    localStorage.setItem('added to watched', 'watched');
    Notify.success('Movie was added to Watched');
  });
  btnQueue.addEventListener('click', function () {
    console.log('queue klik');
    localStorage.setItem('added to queue', 'queue');
    Notify.success('Movie was added to Queue');
  });
}

//notify adjust
Notify.init({
  width: '300px',
  position: 'center-top',
  closeButton: false,
  timeout: 1500,
  showOnlyTheLastOne: true,
  success: {
    background: '#ff6b01',
  },
});
