const modals = (scroll) => {
	function bindModal(triggerSelector, modalSelector, closeSelector, display = 'block') {
		const triggers = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			calcModals = document.querySelectorAll('[data-modal]');

		triggers.forEach(trigger => {
			trigger.addEventListener('click', e => {
				if (e.target) {
					e.preventDefault();
				}

				calcModals.forEach(item => item.style.display = 'none');

				modal.style.display = display;
				document.body.style.overflow = 'hidden';
				// document.body.classList.add('modal-open'); //Bootstrap
				document.body.style.marginRight = `${scroll}px`;
			});
		});

		close.addEventListener('click', () => {
			modal.style.display = 'none';
			document.body.style.overflow = '';
			// document.body.classList.remove('modal-open');
			document.body.style.marginRight = '';
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal && !e.target.closest('[data-modal]')) {
				modal.style.display = 'none';
				document.body.style.overflow = '';
				// document.body.classList.remove('modal-open');
				document.body.style.marginRight = '';
			}
		});
	}

	function showModalByTime(selector, time) {
		setTimeout(function () {
			document.querySelector(selector).style.display = 'block';
			document.body.style.overflow = 'hidden';
		}, time * 1000);
	}

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close');
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close');
	// showModalByTime('.popup', 60);
};

export default modals;