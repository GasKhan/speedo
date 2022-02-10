// accordeon
const headerOpeners = document.querySelectorAll('.header__list-top');

for (let opener of headerOpeners) {
  opener.addEventListener('click', () => {
    const opened = opener.nextElementSibling;
    if (opened.classList.contains('opened')) {
      opened.classList.toggle('opened');
    }else{
    document.querySelector('.header')
            .querySelectorAll('.opened')
            .forEach((item) => item.classList.remove('opened'));
    opened.classList.add('opened');
    }

  })
}

document.addEventListener('click', () => {
  if (!event.target.closest('.header__list-top')){
    document.querySelectorAll('.opened')
    .forEach((item) => item.classList.remove('opened'))}
})

// slider

const sliderWrapper = document.querySelector('.slider__wrapper');
const sliderInner = document.querySelector('.slider__inner');
const sliderContents = document.querySelectorAll('.slider__content');
const sliderPrev = document.querySelector('.slider__prev');
const sliderNext = document.querySelector('.slider__next');
const sliderBlock = document.querySelector('.slider__block')

let blockHeight = sliderBlock.getBoundingClientRect().height;

let maxHeight = blockHeight * sliderContents.length;

let position = 0;
sliderPrev.addEventListener('click', function() {
  let blockHeight = sliderBlock.getBoundingClientRect().height;
  let maxHeight = blockHeight * sliderContents.length;

  position += blockHeight;
  position = Math.min(position, 0);
  sliderInner.style.marginTop = position + 'px';
});

sliderNext.addEventListener('click', function() {
  let blockHeight = sliderBlock.getBoundingClientRect().height;
  let maxHeight = blockHeight * sliderContents.length;
  
  position -= blockHeight;
  position = Math.max(position, -maxHeight + blockHeight);
  sliderInner.style.marginTop = position + 'px';
});