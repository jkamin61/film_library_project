import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { genreIdToList, createHomeCard, createLibraryCard } from './createCard';
import './openMovieInfoModal';
import './createMovieInfoCard';
import './createCard';

//main function
export function handleButtons(data) {
  const btnWatched = document.querySelector('.movie-info__button--watched');
  const btnQueue = document.querySelector('.movie-info__button--queue');

  btnWatched.addEventListener('click', function () {
    localStorage.setItem('addedToWatched', JSON.stringify(data));
    Notify.success(`Movie ${data.title} was added to Watched!`);
  });

  btnQueue.addEventListener('click', function () {
    localStorage.setItem('addedToQueue', JSON.stringify(data));
    Notify.success(`Movie ${data.title} was added to Queue!`);
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
