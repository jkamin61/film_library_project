!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequirebd48;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequirebd48=o),o("31YkX"),o("UL92Z");var a=o("8Aflw"),i=o("14vun"),r=o("4qeCL");function c(e,t,n){var o=e.poster_path,a=e.overview,i=e.genres,r=e.original_title,c=e.title,s=e.popularity,d=e.vote_count,l=e.vote_average,v="";v=o?"https://image.tmdb.org/t/p/w500".concat(o):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";var u=function(e){var t="";return e.forEach((function(e,n){0===n?t+=e.name:n<5&&(t+=", ".concat(e.name))})),e.length>5&&(t+="..."),t}(i),f=parseFloat(l).toFixed(1),m=parseFloat(s).toFixed(1),_='+\n    <div class="movie-info">\n        <div class="movie-info__container">\n          <button class="movie-info__close">&#10005;</button>\n            <div class="movie-info__column">\n                <img class="movie-info__poster" src="'.concat(v,'" />\n            </div>\n            <div class="movie-info__column">\n                <h2 class="movie-info__title">').concat(c.toUpperCase(),'</h2>\n                <table class="movie-info__details">\n                    <tr class="movie-info__table-row">\n                        <td class="movie-info__table-legend">Vote/Votes</td>\n                        <td class="movie-info__table-content"><span class="movie-info__table-content--score">').concat(f,"</span> / ").concat(d,'</td>\n                    </tr>\n                    <tr class="movie-info__table-row">\n                        <td class="movie-info__table-legend">Popularity</td>\n                        <td class="movie-info__table-content">').concat(m,'</td>\n                    </tr>\n                    <tr class="movie-info__table-row">\n                        <td class="movie-info__table-legend">Original Title</td>\n                        <td class="movie-info__table-content">').concat(r.toUpperCase(),'</td>\n                    </tr>\n                    <tr class="movie-info__table-row">\n                        <td class="movie-info__table-legend">Genre</td>\n                        <td class="movie-info__table-content">').concat(u,"</td>\n                    </tr>\n                </table>\n            \n\n            <p>ABOUT</p>\n            <p>\n              ").concat(a,'\n            </p>\n            \n            <div class="movie-info__buttons">\n            ').concat(function(e,t){return"watched"===e?'<button id="remove-button" class="movie-info__button movie-info__button--watched" data-source="'.concat(e,'" data-index="').concat(t,'">REMOVE FROM WATCHED</button>'):"queue"===e?'<button id="remove-button" class="movie-info__button movie-info__button--queue" data-source="'.concat(e,'" data-index="').concat(t,'">REMOVE FROM QUEUE</button>'):"ERROR"}(n,t),"\n            </div>\n          </div>\n        </div>\n    </div>");return _}a=o("8Aflw");var s=document.querySelector(".movie-info__backdrop"),d=new(0,r.FetchMoveApi);function l(e){return"movie-card"===e.className?e.dataset.id:l(e.parentNode)}function v(e){return"movie-card"===e.className?e.dataset.index:v(e.parentNode)}function u(e){return"movie-card"===e.className?e.dataset.source:u(e.parentNode)}var f=function(e){if(!("movie-info__backdrop"===e.target.className)|"movie-info__close"===e.target.className)return s.classList.toggle("is-hidden"),s.innerHTML="",window.removeEventListener("click",f),void s.removeEventListener("keydown",m)},m=function(e){if("Escape"===e.code)return s.classList.toggle("is-hidden"),s.innerHTML="",s.removeEventListener("click",f),void window.removeEventListener("keydown",m)},_=function(e){var t="",n=e.target.dataset.source,o=e.target.dataset.index;if("watched"===n){(t=JSON.parse(localStorage.getItem("addedToWatched"))).splice(o,1);var i=JSON.stringify(t);localStorage.setItem("addedToWatched",i),(0,a.renderLibraryWatched)()}if("queue"===n){(t=JSON.parse(localStorage.getItem("addedToQueue"))).splice(o,1);var r=JSON.stringify(t);localStorage.setItem("addedToQueue",r),(0,a.renderLibraryQueue)()}},p=function(e){if("wrapper"!==e.target.className){var t=l(e.target),n=u(e.target),o=v(e.target);s.classList.remove("is-hidden"),d.getDetail(t).then((function(e){s.innerHTML=c(e,o,n),s.addEventListener("click",f),window.addEventListener("keydown",m),document.querySelector("#remove-button").addEventListener("click",_)}))}};(0,i.modalFunctions)(),(0,a.renderLibraryGallery)(),document.querySelector(".wrapper").addEventListener("click",p)}();
//# sourceMappingURL=library.49e5e33e.js.map
