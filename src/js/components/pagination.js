import { reference } from "../reference/reference";
import { FetchMoveApi } from "../FetchMove";
import { Loader } from "./loader";
import { setSerchMoves } from "./pagination-SearchMovie";
import { onSearchFormButton } from "./searchMove";
import { topFunction } from "./pagination-SearchMovie";
import { createDotsbuttons } from "./pagination-SearchMovie";
import { handleActiveButton } from "./pagination-SearchMovie";


const loader = new Loader();
const fetchMoveApi = new FetchMoveApi();


export async function setPagination(page){
    reference.paginationNumbers.innerHTML = '';
    const respo = await fetchMoveApi.getTrendDay(page);
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

          createDotsbuttons();
          handleActiveButton();


          paginationButtons.forEach(button => {
            button.addEventListener('click', event => {
              if (event.target.classList.contains('pagination-container__button')) {
                topFunction();
                loader.on();
                let pageNumber = event.target.textContent;
                //addModal();
                loader.off();
              } else if (
                event.target.classList.contains('pagination-container__prev-button')
              ) {
                topFunction();
                loader.on();
                currentPages--;
                //addModal();
                loader.off();
              } else if (
                event.target.classList.contains('pagination-container__next-button')
              ) {
                topFunction();
                loader.on();
                currentPages++;
                //addModal();
                loader.off();
              }
            });
          });