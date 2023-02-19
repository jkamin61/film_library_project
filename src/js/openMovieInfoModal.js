export { openMovieInfoModal };
import { FetchMoveApi } from './FetchMove';
import { createMovieInfoCard } from './createMovieInfoCard';
import { handleButtons } from './localStorage';

//Used variables
const backdrop = document.querySelector('.movie-info__backdrop');
const fetch_movie = new FetchMoveApi();

function returnID(target) {
  // Return ID of clicked movie Card
  //(recursive function - checking all parent nodes until movie-card)

  if (target.className === 'movie-card') {
    console.log(JSON.stringify(target.dataset));
    return target.dataset.id;
  } else {
    return returnID(target.parentNode);
  }
}

const handleCloseClick = event => {
  //Handle closing
  if (
    (event.target.className === 'movie-info__backdrop') |
    (event.target.className === 'movie-info__close')
  ) {
    backdrop.classList.toggle('is-hidden');
    backdrop.innerHTML = '';
    backdrop.removeEventListener('click', handleButtons);
    return;
  }
};

const handleOpenClick = event => {
  // Handle click on movie Card
  if (event.target.className === 'wrapper') {
    return;
  }

  let currentId = '';

  currentId = returnID(event.target);
  backdrop.classList.remove('is-hidden');

  fetch_movie.getDetail(currentId).then(data => {
    backdrop.innerHTML = createMovieInfoCard(data);
    backdrop.addEventListener('click', handleCloseClick);
    backdrop.addEventListener('click', handleButtons(data));
  });
};

function openMovieInfoModal() {
  //Main function to handle modal with movie details
  const wrapper = document.querySelector('.wrapper');
  wrapper.addEventListener('click', handleOpenClick);
}
