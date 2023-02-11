const footerLink = document.querySelector('[data-team]');
const closeBtnFooter = document.querySelector('.footer__close');
const footerModal = document.querySelector('.modal-container');

function openModal() {
  footerModal.classList.toggle('is-hidden');
}

function closeModal() {
  footerModal.classList.toggle('is-hidden');
}

footerLink.addEventListener('click', openModal);
closeBtnFooter.addEventListener('click', closeModal);
