import './js/openFooterMdl';
import { localStorage } from './js/localStorage';
import { modalFunctions } from './js/userLogin';
import { openMovieInfoModal } from './js/openMovieInfoModal';
import { setPagination } from './js/pagination';
import { searchMovies } from './js/searchMovie';
import { renderHomeGallery } from './js/renderGallery';
import { setPage } from './js/setPage';

renderHomeGallery(1);
openMovieInfoModal();
modalFunctions();
