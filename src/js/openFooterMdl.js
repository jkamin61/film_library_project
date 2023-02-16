const footerLink = document.querySelector('[data-team]');
const closeBtnFooter = document.querySelector('.footer__close');
const footerModal = document.querySelector('.modal-container');
const clapper = document.querySelector('.footer__clapper');

function openModal() {
  footerModal.classList.toggle('is-hidden');
  document.addEventListener('keydown', escClick);
}

function closeModal() {
  footerModal.classList.toggle('is-hidden');
  document.removeEventListener('keydown', escClick);
}

function escClick(e) {
  if (e.keyCode === 27) {
    closeModal();
  }
}

function closeClick(e) {
  if (e.target === clapper) {
    closeModal();
  }
}
footerLink.addEventListener('click', openModal);
closeBtnFooter.addEventListener('click', closeModal);
clapper.addEventListener('click', closeClick);
