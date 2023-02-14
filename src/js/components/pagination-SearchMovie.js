import {genreIdToList} from "../createCard";
import { reference } from "../reference/reference";
import { FetchMoveApi } from "../FetchMove";
import { createHomeCard } from "../createCard";
import { Loader } from "./loader";

const loader = new Loader();
const fetchMoveApi = new FetchMoveApi();

export function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

export async function setSerchMoves(query, page){
    reference.paginationNumbers.innerHTML = '';
    const respo = await fetchMoveApi.getSearching(query, page);
    const totalNumberOfPages = await respo.total_pages;
    let currentPages = await respo.page;
    let paginationCreated = '';



    if(currentPages>1){
        paginationCreated += `<button type="button" class="pagination-container__prev-button">
    &#8656
</button>`;
    }


    for(let i = 0; i < totalNumberOfPages; i+=1){
        if(
            i==1||
            i==totalNumberOfPages ||
            i==currentPages ||
            (i > currentPages && i <= currentPages + 2)||
            (i < currentPages && i >= currentPages - 2) ||
            (currentPages == 1 && totalNumberOfPages > 4 && i < 8)||
            (currentPages == 2 && totalNumberOfPages > 5 && i < 8) ||
            (currentPages == 2 && totalNumberOfPages > 6 && i < 8) ||
            (currentPages == 2 && totalNumberOfPages > 7 && i < 8) ||
            (currentPages == totalNumberOfPages &&
                totalNumberOfPages > 7 &&
                i > totalNumberOfPages - 7) ||
            (currentPages == totalNumberOfPages - 1 &&
                    totalNumberOfPages > 7 &&
                    i > totalNumberOfPages - 7) ||
            (currentPages == totalNumberOfPages - 2 &&
                    totalNumberOfPages > 7 &&
                    i > totalNumberOfPages - 7) ||
            (currentPages == totalNumberOfPages - 3 &&
                    totalNumberOfPages > 7 &&
                    i > totalNumberOfPages - 7)
                    ) {
                        paginationCreated += `<button type="button" class="pagination-container__button" data-id="${i}">${i}</button>`;
                      }
            }
        }
            if (totalNumberOfPages > 2 && totalNumberOfPages !== currentPages) {
                paginationCreated += `<button type="button" class="pagination-container__next-button">&#8658
                </button>`;
        }

        reference.paginationNumbers.innerHTML = paginationCreated;

        const paginationButtons = document.querySelectorAll(
            '.pagination-numbers button'
          );



          export function createDotsbuttons() {
            const firstDotButtonLocation = document.querySelector(
              'button[data-id="1"]'
            );
            const lastDotButtonLocation = document.querySelector(
              `button[data-id="${totalNumberOfPages}"`
            );
            const firstDotButton = document.createElement('button');
            firstDotButton.textContent = '...';
            firstDotButton.classList.add('pagination-container__first-dot-button');
            const lastDotButton = document.createElement('button');
            lastDotButton.textContent = '...';
            lastDotButton.classList.add('pagination-container__last-dot-button');
        
            if (currentPages > 4) {
              firstDotButtonLocation.after(firstDotButton);
            }
        
            if (currentPages < totalNumberOfPages - 3)
              lastDotButtonLocation.before(lastDotButton);
          }
          createDotsbuttons();



          export function handleActiveButton() {
            paginationButtons.forEach(button => {
              button.classList.remove('pagination-container__button--active');
              let pageIndex = button.textContent;
              if (pageIndex == currentPages) {
                button.classList.add('pagination-container__button--active');
              }
            });
          }
        
          handleActiveButton();
        
          paginationButtons.forEach(button => {
            button.addEventListener('click', async event => {
              if (event.target.classList.contains('pagination-container__button')) {
                topFunction();
                loader.on();
                let pageNumber = event.target.textContent;
                const genresList = await genreIdToList();
                const response = await fetchApiMovies.getSearching(query, pageNumber);
                const movies = await response.results;
                renderMoviesList(movies, genresList);
                setSerchMoves(query, pageNumber);
                //addModal();
                loader.off();
              } else if (
                event.target.classList.contains('pagination-container__prev-button')
              ) {
                topFunction();
                loader.on();
                currentPages--;
                const genresList = await genreIdToList();
                const response = await fetchApiMovies.getSearching(query, currentPages);
                const movies = await response.results;
                renderMoviesList(movies, genresList);
                setSerchMoves(query, currentPages);
                //addModal();
                loader.off();
              } else if (
                event.target.classList.contains('pagination-container__next-button')
              ) {
                topFunction();
                loader.on();
                currentPages++;
                const genresList = await genreIdToList();
                const response = await fetchApiMovies.getSearching(query, currentPages);
                const movies = await response.results;
                createHomeCard(movies, genresList);
                setSerchMoves(query, currentPages);
                //addModal();
                loader.off();
              }
            });
          });