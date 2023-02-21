import { createHomeCard, createLibraryCard } from './js/createCard';
import { compileGenreDictionary } from './js/compileGenreDictionary';
import { FetchMoveApi } from './js/FetchMove';
import './js/openFooterMdl';
import { localStorage } from './js/localStorage';
import { modalFunctions } from './js/userLogin';
import { openMovieInfoModal } from './js/openMovieInfoModal';
import { setPagination } from './js/pagination';

const wrapper = document.querySelector('.wrapper');
const PER_PAGE = 20;

const get_movies = new FetchMoveApi();

get_movies.getTrendDay(1).then(data => {
  compileGenreDictionary().then(genre_dictionary => {
    console.log(data.results[1]);
    data.results.forEach(element => {
      const draft = createLibraryCard(element, genre_dictionary);
      wrapper.insertAdjacentHTML('beforeend', draft);
    });
  });
});
openMovieInfoModal();
modalFunctions();
setPagination(1);
