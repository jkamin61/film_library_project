export { search_movies };
import { createHomeCard } from './createCard';
import { compileGenreDictionary } from './compileGenreDictionary';
import { FetchMoveApi } from './FetchMovie';
import './openFooterMdl';
import { generateButtons } from './generateButtons';
import { setPageSearch, setPageHome } from './setPage';

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
    const results = await search_movies.getSearching(query, 1);
    search_movies.searchResults = results.results;
    compileGenreDictionary().then(genre_dictionary => {
      search_movies.searchResults.forEach(element => {
        const draft = createHomeCard(element, genre_dictionary);
        wrapper.insertAdjacentHTML('beforeend', draft);
      });
    });
    search_movies.getSearchingTotalPages(query).then(total_pages => {
      const buttons_markup = generateButtons(1, total_pages);
      buttons.innerHTML = buttons_markup;
    });
    buttons.addEventListener('click', setPageSearch);
  }
};

document
  .querySelector('.search-bar')
  .addEventListener('submit', firstSearchHandler);
