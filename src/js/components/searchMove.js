import { genreIdToList } from "../genreIdToList";
import { reference } from "../reference/reference";
import { FetchMoveApi } from "../FetchMove";
import { createHomeCard } from "../createCard";
import { Loader } from "./loader";
import { setSerchMoves } from "./pagination-SearchMovie";

export {onSearchFormButton};


const loader = new Loader();
const fetchMoveApi = new FetchMoveApi();


reference.searchForm.addEventListener("submit", onSearchFormButton);


async function onSearchFormButton(element) {
    element.preventDefault();


    loader.on();

    const genresList = await genreIdToList();
    const query = refs.formInput.value.trim();
    const response = await fetchMoveApi.getSearching(query, 1);
    const movies = await response.results;

    if (movies.length === 0) {
        loader.off();
        // reference.notification.classList.remove('off'); //needed notification in formSearch
        // setTimeout(() => {reference.notification.classList.add('off')}, 1000);
        return
    }

    createHomeCard(movies, genresList);
    setSerchMoves(query, 1);
    // addToggleModal();

    loader.off();
}