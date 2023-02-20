export { openMovieInfoModalLibrary };
import { FetchMoveApi } from './FetchMove';
import { createMovieInfoLibrary } from './createMovieInfoLibrary';
import { renderLibraryWatched, renderLibraryQueue } from './renderGallery';

//Used variables
const backdrop = document.querySelector('.movie-info__backdrop');
const fetch_movie = new FetchMoveApi();

function returnID(target) {
  // Return ID of clicked movie Card
  //(recursive function - checking all parent nodes until movie-card)

  if (target.className === 'movie-card') {
    return target.dataset.id;
  } else {
    return returnID(target.parentNode);
  }
}

function returnIndex(target) {
  // Return ID of clicked movie Card
  //(recursive function - checking all parent nodes until movie-card)

  if (target.className === 'movie-card') {
    return target.dataset.index;
  } else {
    return returnIndex(target.parentNode);
  }
}

function returnSource(target) {
  // Return ID of clicked movie Card
  //(recursive function - checking all parent nodes until movie-card)

  if (target.className === 'movie-card') {
    return target.dataset.source;
  } else {
    return returnSource(target.parentNode);
  }
}

const handleCloseClick = event => {
  //Handle closing
  if (
    !(event.target.className === 'movie-info__backdrop') |
    (event.target.className === 'movie-info__close')
  ) {
    backdrop.classList.toggle('is-hidden');
    backdrop.innerHTML = '';

    window.removeEventListener('click', handleCloseClick);
    backdrop.removeEventListener('keydown', handleCloseESC);
    return;
  }
};

const handleCloseESC = event => {
  //Handle closing
  if (event.code === 'Escape') {
    backdrop.classList.toggle('is-hidden');
    backdrop.innerHTML = '';

    backdrop.removeEventListener('click', handleCloseClick);
    window.removeEventListener('keydown', handleCloseESC);
    return;
  }
};

const handleRemoveButton = event => {
  let data_array = '';
  const source = event.target.dataset.source;
  const index = event.target.dataset.index;

  if (source === 'watched') {
    data_array = JSON.parse(localStorage.getItem('addedToWatched'));
    data_array.splice(index, 1);
    const stringified_data = JSON.stringify(data_array);
    localStorage.setItem('addedToWatched', stringified_data);
    renderLibraryWatched();
  }
  if (source === 'queue') {
    data_array = JSON.parse(localStorage.getItem('addedToQueue'));
    data_array.splice(index, 1);
    const stringified_data = JSON.stringify(data_array);
    localStorage.setItem('addedToQueue', stringified_data);
    renderLibraryQueue();
  }
};

const handleOpenClick = event => {
  // Handle click on movie Card
  if (event.target.className === 'wrapper') {
    return;
  }

  const current_id = returnID(event.target);
  const source = returnSource(event.target);
  const current_index = returnIndex(event.target);
  let button = '';

  backdrop.classList.remove('is-hidden');

  fetch_movie.getDetail(current_id).then(data => {
    backdrop.innerHTML = createMovieInfoLibrary(data, current_index, source);
    backdrop.addEventListener('click', handleCloseClick);
    window.addEventListener('keydown', handleCloseESC);
    button = document.querySelector('#remove-button');
    button.addEventListener('click', handleRemoveButton);
  });
};

function openMovieInfoModalLibrary() {
  //Main function to handle modal with movie details
  const wrapper = document.querySelector('.wrapper');
  wrapper.addEventListener('click', handleOpenClick);
}
