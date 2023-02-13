// dodac id do watched/queue buttons ?
// FT-18 After clicking 'add to watch' and 'add to queue' the movie is beeing saved in local storage Po kliknięciu przycisku "Add to watched" film zostaje dodany do filmów obejrzanych przez użytkownika (local-storage)
// import { createMovieInfoCard } from 'src/js/createMovieInfoCard.js';
import { createLibraryCard } from './createCard';

const btnWatched = document.querySelector('movie-info__button--watched');
const btnQueue = document.querySelector('movie-info__button--queue');

// btnWatched.addEventListener('click', function () {
// window.localStorage.setItem('add to watched',
// JSON.stringify()
// )
// });

// const draft = createLibraryCard(element, genre_dictionary);
// wrapper.insertAdjacentHTML('beforeend', draft);
console.log(createLibraryCard);
