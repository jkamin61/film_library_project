import { createHomeCard, createLibraryCard } from './js/createCard';
import { compileGenreDictionary } from './js/compileGenreDictionary';
import { FetchMoveApi } from './js/FetchMove';
import './js/openFooterMdl';
import { modalFunctions } from './js/userLogin';
import { openMovieInfoModal } from './js/openMovieInfoModal';
import { setPagination } from './js/pagination';
import './js/localStorage';

const wrapper = document.querySelector('.wrapper');
const PER_PAGE = 20;
const get_movies = new FetchMoveApi();
import { searchMovies } from './js/searchMovie';

get_movies.getTrendDay(1).then(data => {
  compileGenreDictionary().then(genre_dictionary => {
    data.results.forEach(element => {
      const draft = createLibraryCard(element, genre_dictionary);
      wrapper.insertAdjacentHTML('beforeend', draft);
    });
  });
});
openMovieInfoModal();
modalFunctions();
setPagination(1);
