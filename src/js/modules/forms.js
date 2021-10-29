import checkNumInputs from './checkNumInputs';

const forms = (state) => {
	const form = document.querySelectorAll('form'),
		inputs = document.querySelectorAll('input');

	const message = {
		loading: 'Загрузка...',
		success: 'Спасибо! С вами скоро свяжемся',
		failure: 'Что-то пошло не так...'
	};

	const postData = async (url, data) => {
		document.querySelector('.status').textContent = message.loading;
		let res = await fetch(url, {
			method: 'POST',
			body: data,
		});

		return await res.text();
	};

	checkNumInputs('input[name="user_phone"]');

	const clearInputs = () => {
		inputs.forEach(input => input.value = '');
	}

	form.forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			item.appendChild(statusMessage);

			const formData = new FormData(item);

			if (item.getAttribute('data-calc') === 'end') {
				for (const key in state) {
					if (Object.hasOwnProperty.call(state, key)) {
						formData.append(key, state[key]);

					}
				}
			}

			postData('assets/server.php', formData)
				.then(res => {
					console.log(res);
					statusMessage.textContent = message.success;
				})
				.catch(() => {
					statusMessage.textContent = message.failure;
				})
				.finally(() => {
					clearInputs();
					setTimeout(function () {
						statusMessage.remove();
					}, 5000);
				});
		});
	});
};

export default forms;
