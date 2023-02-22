export { search_movies };
import { createHomeCard } from './createCard';
import { compileGenreDictionary } from './compileGenreDictionary';
import { FetchMoveApi } from './FetchMovie';
import './openFooterMdl';
import { generateButtons } from './generateButtons';
import { setPageSearch, setPageHome } from './setPage';
import { renderSearchMovies } from './setPage';

const wrapper = document.querySelector('.wrapper');
const buttons = document.querySelector('.pagination-numbers');

const search_movies = new FetchMoveApi();

function clearResults() {
  wrapper.innerHTML = '';
}

const firstSearchHandler = async event => {
  event.preventDefault();
  const query = event.target.querySelector('.search-bar__input').value;
  buttons.dataset.query = query;
  buttons.removeEventListener('click', setPageHome);
  if (query) {
    buttons.removeEventListener('click', setPageSearch);
    clearResults();

    renderSearchMovies(1, query);

    buttons.addEventListener('click', setPageSearch);
  }
};

document
  .querySelector('.search-bar')
  .addEventListener('submit', firstSearchHandler);
