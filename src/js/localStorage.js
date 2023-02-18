export { storage };
import { Notify } from 'notiflix/build/notiflix-notify-aio';
<<<<<<< Updated upstream

const btnWatched = document.querySelector('#watched');
const btnQueue = document.querySelector('#queue');
=======
import './openMovieInfoModal';
import './createMovieInfoCard';
import { genreIdToList, createHomeCard, createLibraryCard } from './createCard';

const btnWatched = document.querySelector('.movie-info__button--watched');
const btnQueue = document.querySelector('.movie-info__button--queue');

console.log(btnWatched);
>>>>>>> Stashed changes

//notify adjust
Notify.init({
  width: '300px',
  position: 'center-top',
  closeButton: false,
  timeout: 2000,
  success: {
    background: '#ff6b01',
  },
});

// ** storage na btn w library
const storage = () => {
  btnWatched.addEventListener('click', e => {
    e.preventDefault();
    console.log('klik');
    localStorage.setItem('watched', 'test name');
    // showLocalStorage();
    Notify.success('Movie added to Watched');
  });
  btnQueue.addEventListener('click', e => {
    e.preventDefault();
    console.log('kju');
    localStorage.setItem('queue', 'value');
    // showLocalStorage();
    Notify.success('Movie added to Queue');
  });
};

//**  */
<<<<<<< Updated upstream
import { genreIdToList, createHomeCard, createLibraryCard } from './createCard';

const header = document.querySelector('.header__title');
console.log(header);
=======
>>>>>>> Stashed changes

// header.addEventListener('click', storage);

// const storage = () => {
//   localStorage.setItem('movie details', JSON.stringify(data.results[1]));
// };

// ** test na local storage - usunąć na koniec
// window.localStorage.setItem(
//   'movie',
//   JSON.stringify({ name: 'imię', movie: 'film' })
// );

// function showLocalStorage() {
//   let value = [];
//   let keys = Object.keys(localStorage);
//   let i = keys.length;
//   while (i--) {
//     value.push(localStorage.getItem(keys[i]));
//   }
//   document.querySelector('.film-container').textContent = value;
// }

// import {}
// const movie = document.querySelector('.movie-card');
