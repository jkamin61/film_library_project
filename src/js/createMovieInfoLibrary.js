export { createMovieInfoLibrary };

function genreIdToList(genre_ids) {
  /**
   * Function returning string with listed genres names from array of ids. Used variables:
   * genre_ids: array of genre ids to be compiled into list
   * genre_dict: dictionary connecting genre ID to name
   */
  const max_genres = 5;
  let genres = '';
  genre_ids.forEach((element, index) => {
    if (index === 0) {
      genres += element.name;
    } else if (index < max_genres) {
      genres += `, ${element.name}`;
    }
  });
  if (genre_ids.length > max_genres) {
    genres += '...';
  }

  return genres;
}

function returnButton(source, current_index) {
  if (source === 'watched') {
    return `<button id="remove-button" class="movie-info__button movie-info__button--watched" data-source="${source}" data-index="${current_index}">REMOVE FROM WATCHED</button>`;
  }
  if (source === 'queue') {
    return `<button id="remove-button" class="movie-info__button movie-info__button--queue" data-source="${source}" data-index="${current_index}">REMOVE FROM QUEUE</button>`;
  } else {
    return 'ERROR';
  }
}

function createMovieInfoLibrary(data, current_index, source) {
  /**
   * Function returning markup of movie card on homepage. Used variables:
   * data: fetched data of single movie
   * genre_dict: dictionary connecting genre ID to name
   */

  //Getting needed data
  const {
    poster_path,
    overview,
    genres,
    original_title,
    title,
    popularity,
    vote_count,
    vote_average,
  } = data;

  //Preparing data
  const image_src = `https://image.tmdb.org/t/p/w500${poster_path}`;
  let genres_list = genreIdToList(genres);
  const score = parseFloat(vote_average).toFixed(1);
  const popularity_trimmed = parseFloat(popularity).toFixed(1);

  const markup = `+
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
                        <td class="movie-info__table-content">${original_title.toUpperCase()}</td>
                    </tr>
                    <tr class="movie-info__table-row">
                        <td class="movie-info__table-legend">Genre</td>
                        <td class="movie-info__table-content">${genres_list}</td>
                    </tr>
                </table>
            

            <p>ABOUT</p>
            <p>
              ${overview}
            </p>
            
            <div class="movie-info__buttons">
            ${returnButton(source, current_index)}
            </div>
          </div>
        </div>
    </div>`;

  return markup;
}
