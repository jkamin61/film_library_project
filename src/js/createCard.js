export { createHomeCard, createLibraryCard };

//How many genres will show up on list at most, used to declutter cards
const MAX_GENRES = 3;

function genreIdToList(genre_ids, genre_dict) {
  /**
   * Function returning string with listed genres names from array of ids.
   * Used variables:
   * genre_ids: array of genre ids to be compiled into list
   * genre_dict: dictionary connecting genre ID to name,
   */
  let genres = '';

  genre_ids.forEach((element, index) => {
    if (index === 0) {
      genres += genre_dict[element];
    } else if (index < MAX_GENRES) {
      genres += `, ${genre_dict[element]}`;
    }
  });
  if (genre_ids.length > MAX_GENRES) {
    genres += `...`;
  }

  return genres;
}

function createHomeCard(data, genre_dict) {
  /**
   * Function returning markup of movie card on homepage.
   * Used variables:
   * data: fetched data of single movie
   * genre_dict: dictionary connecting genre ID to name,
   */
  const { poster_path, id, release_date, title, genre_ids, vote_average } =
    data;

  const date = new Date(release_date);
  const year = date.getFullYear();
  const image_src = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const genres = genreIdToList(genre_ids, genre_dict);

  const markup = `
  <div class="movie-card" data-id="${id}">
        <img class="movie-card__image" src="${image_src}" />
        <p class="movie-card__details">
        ${title.toUpperCase()}<br />
          <span class="movie-card__details--genre">${genres} | ${year}</span>
        </p>
      </div>`;

  return markup;
}

function createLibraryCard(data, genre_dict) {
  /**
   * Function returning markup of movie card on library.
   * Used variables:
   * data: fetched data of single movie
   * genre_dict: dictionary connecting genre ID to name
   */
  const { poster_path, id, release_date, title, genre_ids, vote_average } =
    data;

  const date = new Date(release_date);
  const year = date.getFullYear();
  const image_src = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const score = parseFloat(vote_average).toFixed(1);
  const genres = genreIdToList(genre_ids, genre_dict);

  const markup = `
  <div class="movie-card" data-id="${id}">
        <img class="movie-card__image" src="${image_src}" />
        <p class="movie-card__details">
        ${title.toUpperCase()}<br />
          <span class="movie-card__details--genre">${genres} | ${year}</span
          ><span class="movie-card__details--score">${score}</span>
        </p>
      </div>`;

  return markup;
}
