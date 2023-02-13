export { createMovieInfoCard };

function genreIdToList(genre_ids, genre_dict) {
  /**
   * Function returning string with listed genres names from array of ids. Used variables:
   * genre_ids: array of genre ids to be compiled into list
   * genre_dict: dictionary connecting genre ID to name
   */
  const max_genres = 4;
  let genres = '';
  genre_ids.forEach((element, index) => {
    if (index === 0) {
      genres += genre_dict[element];
    } else if (index < max_genres) {
      genres += `, ${genre_dict[element]}`;
    }
  });
  if (genre_ids.length > max_genres) {
    genres += '...';
  }

  return genres;
}

function createMovieInfoCard(data, genre_dict) {
  /**
   * Function returning markup of movie card on homepage. Used variables:
   * data: fetched data of single movie
   * genre_dict: dictionary connecting genre ID to name
   */

  //Getting needed data
  const {
    poster_path,
    overview,
    genre_ids,
    original_title,
    title,
    popularity,
    vote_count,
    vote_average,
  } = data;

  //Preparing data
  const image_src = `https://image.tmdb.org/t/p/w500${poster_path}`;
  let genres = genreIdToList(genre_ids, genre_dict);
  const score = parseFloat(vote_average).toFixed(1);
  const popularity_trimmed = parseFloat(popularity).toFixed(1);

  const markup = `
    <div class="movie-info">
        <div class="movie-info__container">
          <button class="movie-info__close">&#10005;</button>
            <div class="movie-info__column">
                <img class="movie-info__poster" src="${image_src}" />
            </div>
            <div class="movie-info__column">
                <h2 class="movie-info__title">${title.toUpperCase()}</h2>
                <table class="movie-info__details">
                    <tr class="movie-info__table-row">
                        <td class="movie-info__table-legend">Vote/Votes</td>
                        <td class="movie-info__table-content"><span class="movie-info__table-content--score">${score}</span> / ${vote_count}</td>
                    </tr>
                    <tr class="movie-info__table-row">
                        <td class="movie-info__table-legend">Popularity</td>
                        <td class="movie-info__table-content">${popularity_trimmed}</td>
                    </tr>
                    <tr class="movie-info__table-row">
                        <td class="movie-info__table-legend">Original Title</td>
                        <td class="movie-info__table-content">${original_title}</td>
                    </tr>
                    <tr class="movie-info__table-row">
                        <td class="movie-info__table-legend">Genre</td>
                        <td class="movie-info__table-content">${genres}</td>
                    </tr>
                </table>
            

            <p>ABOUT</p>
            <p>
              ${overview}
            </p>
            
            <div class="movie-info__buttons">
              <button class="movie-info__button movie-info__button--watched">ADD TO WATCHED</button>
              <button class="movie-info__button movie-info__button--queue">ADD TO QUEUE</button>
            </div>
          </div>
        </div>
    </div>`;

  return markup;
}
