import './js/openFooterMdl';
import { modalFunctions } from './js/userLogin';
import { openMovieInfoModal } from './js/openMovieInfoModal';
import { setPagination } from './js/pagination';
import { searchMovies } from './js/searchMovie';
import { renderHomeGallery } from './js/renderGallery';

let current_page = 1;

renderHomeGallery(current_page);
openMovieInfoModal();
modalFunctions();
setPagination(1);