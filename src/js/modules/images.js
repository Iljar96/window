const images = (scroll) => {
	const imgPopup = document.createElement('div'),
		workSection = document.querySelector('.works'),
		bigImage = document.createElement('img');

	imgPopup.classList.add('popup');
	workSection.appendChild(imgPopup);

	imgPopup.appendChild(bigImage);

	workSection.addEventListener('click', e => {
		e.preventDefault();

		let target = e.target;

		if (target && target.classList.contains('preview')) {
			imgPopup.classList.add('_active');
			document.body.style.overflow = 'hidden';
			bigImage.setAttribute('src', target.closest('a').getAttribute('href'));
			document.body.style.marginRight = `${scroll}px`;
		}
		if (target && target.matches('div.popup')) {
			imgPopup.classList.remove('_active');
			document.body.style.overflow = '';
			imgPopup.querySelector('img').classList.remove('_zoom');
			document.body.style.marginRight = '';
		}

		imgPopup.querySelector('img').addEventListener('dblclick', e => {
			e.target.classList.toggle('_zoom');
		});
	});
};

export default images;