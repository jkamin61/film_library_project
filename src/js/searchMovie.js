export { search_movies };
import { createHomeCard, createLibraryCard } from './createCard';
import { compileGenreDictionary } from './compileGenreDictionary';
import { FetchMoveApi } from './FetchMove';
import './openFooterMdl';
const wrapper = document.querySelector('.wrapper');

const search_movies = new FetchMoveApi();

function clearResults() {
  wrapper.innerHTML = '';
}

document
  .querySelector('.search-bar')
  .addEventListener('submit', async event => {
    event.preventDefault();
    const query = event.target.querySelector('.search-bar__input').value;
    if (query) {
      clearResults();
      const results = await search_movies.getSearching(query, 1);
      search_movies.searchResults = results.results;
      compileGenreDictionary().then(genre_dictionary => {
        search_movies.searchResults.forEach(element => {
          const draft = createHomeCard(element, genre_dictionary);
          wrapper.insertAdjacentHTML('beforeend', draft);
        });
      });
    }
  });
