var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequirebd48;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequirebd48=o),o("iqU5k"),o("31u3U");var i=o("aO2mr"),a=o("feD1y"),r=o("4TIlm");function s(e,t,n){const{poster_path:o,overview:i,genres:a,original_title:r,title:s,popularity:d,vote_count:l,vote_average:c}=e;let v="";v=o?`https://image.tmdb.org/t/p/w500${o}`:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";let u=function(e){let t="";return e.forEach(((e,n)=>{0===n?t+=e.name:n<5&&(t+=`, ${e.name}`)})),e.length>5&&(t+="..."),t}(a);const m=parseFloat(c).toFixed(1),_=parseFloat(d).toFixed(1),f=`+\n    <div class="movie-info">\n        <div class="movie-info__container">\n          <button class="movie-info__close">&#10005;</button>\n            <div class="movie-info__column">\n                <img class="movie-info__poster" src="${v}" />\n            </div>\n            <div class="movie-info__column">\n                <h2 class="movie-info__title">${s.toUpperCase()}</h2>\n                <table class="movie-info__details">\n                    <tr class="movie-info__table-row">\n                        <td class="movie-info__table-legend">Vote/Votes</td>\n                        <td class="movie-info__table-content"><span class="movie-info__table-content--score">${m}</span> / ${l}</td>\n                    </tr>\n                    <tr class="movie-info__table-row">\n                        <td class="movie-info__table-legend">Popularity</td>\n                        <td class="movie-info__table-content">${_}</td>\n                    </tr>\n                    <tr class="movie-info__table-row">\n                        <td class="movie-info__table-legend">Original Title</td>\n                        <td class="movie-info__table-content">${r.toUpperCase()}</td>\n                    </tr>\n                    <tr class="movie-info__table-row">\n                        <td class="movie-info__table-legend">Genre</td>\n                        <td class="movie-info__table-content">${u}</td>\n                    </tr>\n                </table>\n            \n\n            <p>ABOUT</p>\n            <p>\n              ${i}\n            </p>\n            \n            <div class="movie-info__buttons">\n            ${function(e,t){return"watched"===e?`<button id="remove-button" class="movie-info__button movie-info__button--watched" data-source="${e}" data-index="${t}">REMOVE FROM WATCHED</button>`:"queue"===e?`<button id="remove-button" class="movie-info__button movie-info__button--queue" data-source="${e}" data-index="${t}">REMOVE FROM QUEUE</button>`:"ERROR"}(n,t)}\n            </div>\n          </div>\n        </div>\n    </div>`;return f}i=o("aO2mr");const d=document.querySelector(".movie-info__backdrop"),l=new(0,r.FetchMoveApi);function c(e){return"movie-card"===e.className?e.dataset.id:c(e.parentNode)}function v(e){return"movie-card"===e.className?e.dataset.index:v(e.parentNode)}function u(e){return"movie-card"===e.className?e.dataset.source:u(e.parentNode)}const m=e=>{if(!("movie-info__backdrop"===e.target.className)|"movie-info__close"===e.target.className)return d.classList.toggle("is-hidden"),d.innerHTML="",window.removeEventListener("click",m),void d.removeEventListener("keydown",_)},_=e=>{if("Escape"===e.code)return d.classList.toggle("is-hidden"),d.innerHTML="",d.removeEventListener("click",m),void window.removeEventListener("keydown",_)},f=e=>{let t="";const n=e.target.dataset.source,o=e.target.dataset.index;if("watched"===n){t=JSON.parse(localStorage.getItem("addedToWatched")),t.splice(o,1);const e=JSON.stringify(t);localStorage.setItem("addedToWatched",e),(0,i.renderLibraryWatched)()}if("queue"===n){t=JSON.parse(localStorage.getItem("addedToQueue")),t.splice(o,1);const e=JSON.stringify(t);localStorage.setItem("addedToQueue",e),(0,i.renderLibraryQueue)()}},p=e=>{if("wrapper"===e.target.className)return;const t=c(e.target),n=u(e.target),o=v(e.target);let i="";d.classList.remove("is-hidden"),l.getDetail(t).then((e=>{d.innerHTML=s(e,o,n),d.addEventListener("click",m),window.addEventListener("keydown",_),i=document.querySelector("#remove-button"),i.addEventListener("click",f)}))};(0,a.modalFunctions)(),(0,i.renderLibraryGallery)(),document.querySelector(".wrapper").addEventListener("click",p);
//# sourceMappingURL=library.c5ac2df4.js.map
