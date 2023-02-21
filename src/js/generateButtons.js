export { generateButtons };

function createButton(number, current_page) {
  if (number === current_page) {
    return `<button class="pagination-container__button pagination-container__button--active" data-page="${number}">${number}</button>`;
  }

  return `<button class="pagination-container__button" data-page="${number}">${number}</button>`;
}

function createDots() {
  return '<span>...</span>';
}

function generateButtons(current_page, pagination_number) {
  let buttons = '';

  if (pagination_number <= 7) {
    for (let i = 1; i <= pagination_number; i++) {
      buttons += createButton(i, current_page);
    }
    return buttons;
  }

  buttons += createButton(1, current_page);

  if (current_page <= 3) {
    for (let i = 2; i <= current_page + 2; i++) {
      buttons += createButton(i, current_page);
    }
    buttons += createDots();
    buttons += createButton(pagination_number, current_page);

    return buttons;
  }
  if (current_page >= pagination_number - 3) {
    buttons += createDots();
    for (let i = current_page - 2; i <= pagination_number; i++) {
      buttons += createButton(i, current_page);
    }
    return buttons;
  }
  buttons += createDots();
  for (let i = current_page - 2; i <= current_page + 2; i++) {
    buttons += createButton(i, current_page);
  }
  buttons += createDots();
  buttons += createButton(pagination_number, current_page);
  return buttons;
}
