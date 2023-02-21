import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './openMovieInfoModal';
import './createMovieInfoCard';
import './createCard';

// promise on watched
function addToWatched(data) {
  return new Promise((resolve, reject) => {
    let watched = JSON.parse(localStorage.getItem('addedToWatched')) || [];

    if (watched.find(el => el.id === data.id)) {
      reject();
      return;
    }
    watched.push(data);
    localStorage.setItem('addedToWatched', JSON.stringify(watched));
    resolve({ data });
  });
}

// promise on queue
function addToQueue(data) {
  return new Promise((resolve, reject) => {
    let queue = JSON.parse(localStorage.getItem('addedToQueue')) || [];

    if (queue.find(el => el.id === data.id)) {
      reject();
      return;
    }
    queue.push(data);
    localStorage.setItem('addedToQueue', JSON.stringify(queue));
    resolve({ data });
  });
}

//event listeners
export function handleButtons(data) {
  const btnWatched = document.querySelector('.movie-info__button--watched');
  const btnQueue = document.querySelector('.movie-info__button--queue');

  btnWatched.addEventListener('click', e => {
    addToWatched(data)
      .then(success =>
        Notify.success(`Movie ${data.title} was added to Watched!`)
      )
      .catch(error => Notify.info(`This movie is already in Watched`));
  });

  btnQueue.addEventListener('click', e => {
    addToQueue(data)
      .then(success =>
        Notify.success(`Movie ${data.title} was added to Queue!`)
      )
      .catch(error => Notify.info(`This movie is already in Queue`));
  });
}

//notify adjust
Notify.init({
  width: '300px',
  position: 'center-top',
  closeButton: false,
  timeout: 1500,
  showOnlyTheLastOne: true,
  success: {
    background: '#ff6b01',
  },
});
