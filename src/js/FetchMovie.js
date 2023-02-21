import axios from 'axios';

const API_KEY = 'f55fd89359b4e389c455cb757e994b30';

export class FetchMoveApi {
  constructor() {}

  //trendy films//
  async getTrendDay(page) {
    try {
      axios.defaults.baseURL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${page}`;
      const respo = await axios.get(`${axios.defaults.baseURL}`);
      return respo.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getTrendDayTotalPages() {
    try {
      axios.defaults.baseURL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
      const respo = await axios.get(`${axios.defaults.baseURL}`);
      return respo.data.total_pages;
    } catch (error) {
      console.error(error);
    }
  }

  //search//
  async getSearching(query, page) {
    try {
      axios.defaults.baseURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}&language=en-US`;
      const respo = await axios.get(`${axios.defaults.baseURL}`);
      return respo.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getSearchingTotalPages(query) {
    try {
      axios.defaults.baseURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US`;
      const respo = await axios.get(`${axios.defaults.baseURL}`);
      return respo.data.total_pages;
    } catch (error) {
      console.error(error);
    }
  }

  //Detail Movies //
  async getDetail(movie_id) {
    try {
      axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
      const respo = await axios.get(`${axios.defaults.baseURL}`);
      return respo.data;
    } catch (error) {
      console.error(error);
    }
  }

  //Movies Genres List //
  async getMoviesGenresList() {
    try {
      axios.defaults.baseURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
      const respo = await axios.get(`${axios.defaults.baseURL}`);
      return respo.data;
    } catch (error) {
      console.error(error);
    }
  }
}
