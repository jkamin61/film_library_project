export { renderHomeGallery, renderLibraryGallery };
export { renderLibraryWatched, renderLibraryQueue };
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { FetchMoveApi } from './FetchMovie';
import { createHomeCard, createLibraryCard } from './createCard';
import { compileGenreDictionary } from './compileGenreDictionary';
import { generateButtons } from './generateButtons';
import { setPageHome } from './setPage';

function renderHomeGallery(page) {
  const get_movies = new FetchMoveApi();
  const wrapper = document.querySelector('.wrapper');
  const buttons = document.querySelector('.pagination-numbers');
  let draft = '';

  get_movies.getTrendDay(page).then(data => {
    compileGenreDictionary().then(genre_dictionary => {
      data.results.forEach(element => {
        draft += createHomeCard(element, genre_dictionary);
      });
      wrapper.innerHTML = draft;
    });
  });

  get_movies.getTrendDayTotalPages().then(total_pages => {
    const buttons_markup = generateButtons(page, total_pages);
    buttons.innerHTML = buttons_markup;
  });

  buttons.addEventListener('click', setPageHome);
}

const handleLibraryButtonsClick = event => {
  if (event.target.className === 'library__btn watched') {
    renderLibraryWatched();
  }

  if (event.target.className === 'library__btn queue') {
    renderLibraryQueue();
  }
};

function renderLibraryGallery() {
  const buttons = document.querySelector('.library');

  buttons.addEventListener('click', handleLibraryButtonsClick);
}

function renderLibraryWatched() {
  const gallery = document.querySelector('.wrapper');
  const source = 'watched';
  let markup = '';
  const data_array = JSON.parse(localStorage.getItem('addedToWatched'));

  if (data_array) {
    data_array.forEach((element, index) => {
      markup += createLibraryCard(element, index, source);
    });
    gallery.innerHTML = markup;
  } else {
    Notify.failure(`There is no movies in Watched!`);
  }
}

function renderLibraryQueue() {
  const gallery = document.querySelector('.wrapper');
  const source = 'queue';
  const data_array = JSON.parse(localStorage.getItem('addedToQueue'));
  let markup = '';
  if (data_array) {
    data_array.forEach((element, index) => {
      markup += createLibraryCard(element, index, source);
    });
  } else {
    Notify.failure(`There is no movies in Queue!`);
  }

  gallery.innerHTML = markup;
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
