var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},o=t.parcelRequirebd48;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var a={id:t,exports:{}};return e[t]=a,o.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){n[t]=e},t.parcelRequirebd48=o),o("iqU5k"),o("31u3U");var a=o("feD1y"),r=o("a0gzN"),i=o("1CqGm");i=o("1CqGm");async function c(){let t={};return(new(0,i.FetchMoveApi)).getMoviesGenresList().then((e=>(e.genres.forEach((e=>t[e.id]=e.name)),t))).catch((t=>{console.log(t)}))}const u={paginationNumbers:document.querySelector(".pagination-numbers"),paginationContainer:document.querySelector(".pagination-container"),nextButton:document.querySelector(".pagination-container__next-button"),prevButton:document.querySelector(".pagination-container__prev-button")};r=o("a0gzN");document.querySelector(".wrapper"),document.querySelector(".pagination-container");const s=new(0,i.FetchMoveApi);function l(){document.body.scrollTop=0,document.documentElement.scrollTop=0}var d=o("7mvg5");i=o("1CqGm");o("iqU5k");const p=document.querySelector(".wrapper"),f=new(0,i.FetchMoveApi);document.querySelector(".search-bar").addEventListener("submit",(async t=>{t.preventDefault();const e=t.target.querySelector(".search-bar__input").value;if(e){p.innerHTML="";const t=await f.getSearching(e,1);f.searchResults=t.results,c().then((t=>{f.searchResults.forEach((e=>{const n=(0,d.createLibraryCard)(e,t);p.insertAdjacentHTML("beforeend",n)}))}))}}));i=o("1CqGm"),d=o("7mvg5");!function(t){const e=new(0,i.FetchMoveApi),n=document.querySelector(".wrapper");e.getTrendDay(t).then((t=>{c().then((e=>{t.results.forEach((t=>{const o=(0,d.createHomeCard)(t,e);n.insertAdjacentHTML("beforeend",o)}))}))}))}(1),(0,r.openMovieInfoModal)(),(0,a.modalFunctions)(),async function(t){u.paginationNumbers.innerHTML="";const e=await s.getTrendDay(t),n=await e.total_pages;let o=await e.page,a="";o>1&&(a+='<button type="button" class="pagination-container__prev-button">\n      &#8656\n  </button>');for(let t=1;t<=n;t+=1)(1==t||t==n||t==o||t>o&&t<=o+2||t<o&&t>=o-2||1==o&&n>4&&t<8||2==o&&n>5&&t<8||3==o&&n>6&&t<8||4==o&&n>7&&t<8||o==n&&n>7&&t>n-7||o==n-1&&n>7&&t>n-7||o==n-2&&n>7&&t>n-7||o==n-3&&n>7&&t>n-7)&&(a+=`<button type="button" class="pagination-container__button" data-id="${t}">${t}</button>`);n>2&&n!==o&&(a+='<button type="button" class="pagination-container__next-button">&#8658\n      </button>'),u.paginationNumbers.innerHTML=a;const i=document.querySelectorAll(".pagination-numbers button");!function(){const t=document.querySelector('button[data-id="1"]'),e=document.querySelector(`button[data-id="${n}"`),a=document.createElement("button");a.textContent="...",a.classList.add("pagination-container__first-dot-button");const r=document.createElement("button");r.textContent="...",r.classList.add("pagination-container__last-dot-button"),o>4&&t.after(a),o<n-3&&e.before(r)}(),i.forEach((t=>{t.classList.remove("pagination-container__button--active"),t.textContent==o&&t.classList.add("pagination-container__button--active")})),i.forEach((t=>{t.addEventListener("click",(t=>{if(t.target.classList.contains("pagination-container__button")){l();let e=t.target.textContent;nextfunction(e).then((()=>{(0,r.openMovieInfoModal)(),loader.off()}))}else t.target.classList.contains("pagination-container__prev-button")?(l(),o--,nextfunction(o).then((()=>{(0,r.openMovieInfoModal)(),loader.off()}))):t.target.classList.contains("pagination-container__next-button")&&(l(),o++,nextfunction(o).then((()=>{(0,r.openMovieInfoModal)(),loader.off()})))}))}))}(1);
//# sourceMappingURL=index.32e81472.js.map
