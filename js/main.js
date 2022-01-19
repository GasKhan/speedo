ёconst headerOpeners = document.querySelectorAll('.header__list-top');
const header = document.querySelector('.header');
for (let opener of headerOpeners) {
	opener.addEventListener('click', () => {
		const opened = opener.nextElementSibling;

		if(opened.classList.contains('opened')) {
			opened.classList.toggle('opened');
}else{
		header.querySelectorAll('.opened')
		                      .forEach((item) => item.classList.remove('opened'));
		opened.classList.add('opened');
}
	})
}