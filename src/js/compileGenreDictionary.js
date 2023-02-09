export { compileGenreDictionary };
import { FetchMoveApi } from './FetchMove';

async function compileGenreDictionary() {
  /**
   * Function returning dictionary of genre IDs and names
   * needed for creating movie cards
   */

  let genre_dictionary = {};

  const fetch_movie = new FetchMoveApi();
  return fetch_movie
    .getMoviesGenresList()
    .then(data => {
      data.genres.forEach(el => (genre_dictionary[el.id] = el.name));
      return genre_dictionary;
    })
    .catch(error => {
      console.log(error);
    });
}
