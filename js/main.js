const headerOpeners = document.querySelectorAll('.header__list-top');

for (let opener of headerOpeners) {
  opener.addEventListener('click', () => {
    const opened = opener.nextElementSibling;
    document.querySelector('.header')
            .querySelectorAll('.opened')
            .forEach((item) => item.classList.remove('opened'));
    opened.classList.toggle('opened');
  })
}

document.addEventListener('click', () => {
  if (!event.target.closest('.header__list-top')){
    document.querySelectorAll('.opened')
    .forEach((item) => item.classList.remove('opened'))};
})