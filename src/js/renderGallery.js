export { renderHomeGallery };
import { FetchMoveApi } from './FetchMove';
import { createHomeCard, createLibraryCard } from './createCard';
import { compileGenreDictionary } from './compileGenreDictionary';

function renderHomeGallery(page) {
  const get_movies = new FetchMoveApi();
  const wrapper = document.querySelector('.wrapper');
  get_movies.getTrendDay(page).then(data => {
    compileGenreDictionary().then(genre_dictionary => {
      data.results.forEach(element => {
        const draft = createHomeCard(element, genre_dictionary);
        wrapper.insertAdjacentHTML('beforeend', draft);
      });
    });
  });
}
