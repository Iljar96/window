import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
	const windowForm = document.querySelectorAll('.balcon_icons_img'),
		windowWidth = document.querySelector('#width'),
		windowHeight = document.querySelector('#height'),
		windowType = document.querySelector('#view_type'),
		windowProfile = document.querySelectorAll('.checkbox');

	state.form = 1;
	state.type = windowType.value;

	const changeState = (event, el, prop, value) => {
		el.addEventListener(event, (e) => {
			if (prop === 'width' || prop === 'height' || prop === 'type') {
				state[prop] = e.target.value;
			} else if (prop === 'temperature') {
				if (el.checked) {
					state[prop] = el.value;

					return;
				}
			} else {
				state[prop] = value;
			}
		});
	};

	const removeDisabledForButton = (btnSelector, inputsSelectors) => {
		const inputs = document.querySelectorAll(inputsSelectors);

		inputs.forEach(input => {
			input.addEventListener('input', (e) => {
				if (Array.from(inputs).every(currentValue => currentValue.value !== '')) {
					document.querySelector(btnSelector).disabled = false;
				}
			});
		});
	};

	removeDisabledForButton('.popup_calc_button', '#width,#height');
	removeDisabledForButton('.popup_calc_profile_button', '.checkbox');

	checkNumInputs('#width');
	checkNumInputs('#height');

	windowForm.forEach((item, i) => {
		changeState('click', item, 'form', i + 1);
	});

	changeState('change', windowWidth, 'width');
	changeState('change', windowHeight, 'height');
	changeState('change', windowType, 'type');
	windowProfile.forEach(el => {
		changeState('change', el, 'temperature');
	});


};

export default changeModalState;