export { setPageHome, setPageSearch };
import { generateButtons } from './generateButtons';
import { compileGenreDictionary } from './compileGenreDictionary';
import { renderHomeGallery } from './renderGallery';
import { FetchMoveApi } from './FetchMovie';
import { createHomeCard } from './createCard';

function setPageHome(event) {
  if (event.target.tagName != 'BUTTON') {
    return;
  }
  const buttons = document.querySelector('.pagination-numbers');
  const current_page = parseInt(event.target.dataset.page);

  buttons.removeEventListener('click', setPageHome);
  renderHomeGallery(current_page);
}

function setPageSearch(event) {
  if (event.target.tagName != 'BUTTON') {
    return;
  }
  const buttons = document.querySelector('.pagination-numbers');
  const current_page = parseInt(event.target.dataset.page);
  const query = buttons.dataset.query;

  renderSearchMovies(current_page, query);
}

function renderSearchMovies(current_page, query) {
  const search_movies = new FetchMoveApi();
  const wrapper = document.querySelector('.wrapper');
  const buttons = document.querySelector('.pagination-numbers');

  search_movies.getSearching(query, current_page).then(resp => {
    const data_array = resp.results;
    let markup = '';
    compileGenreDictionary().then(genre_dictionary => {
      data_array.forEach(element => {
        markup += createHomeCard(element, genre_dictionary);
      });
      wrapper.innerHTML = markup;

      search_movies.getSearchingTotalPages(query).then(total_pages => {
        const buttons_markup = generateButtons(current_page, total_pages);
        buttons.innerHTML = buttons_markup;
      });
    });
  });
}
