const timer = (daysSelector, hoursSelector, minutesSelector, secondsSelector, daysTextSelector, hoursTextSelector, minutesTextSelector, secondsTextSelector, date) => {
	const targetDate = new Date(date); //Format '2022-01-01'

	const daysVal = document.querySelector(daysSelector);
	const hoursVal = document.querySelector(hoursSelector);
	const minutesVal = document.querySelector(minutesSelector);
	const secondsVal = document.querySelector(secondsSelector);

	const daysText = document.querySelector(daysTextSelector);
	const hoursText = document.querySelector(hoursTextSelector);
	const minutesText = document.querySelector(minutesTextSelector);
	const secondsText = document.querySelector(secondsTextSelector);

	function declOfNum(number, titles) {
		let cases = [2, 0, 1, 1, 1, 2];
		return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
	}

	const timeCount = () => {
		let now = new Date();
		let leftUntil = targetDate - now;

		let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
		let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
		let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
		let seconds = Math.floor(leftUntil / 1000) % 60;

		if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
			clearInterval(3);
		}

		days > 99 ? daysVal.textContent = days : daysVal.textContent = ('0' + days).slice(-2);
		hoursVal.textContent = ('0' + hours).slice(-2);
		minutesVal.textContent = ('0' + minutes).slice(-2);
		secondsVal.textContent = ('0' + seconds).slice(-2);


		daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
		hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
		minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
		secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);

	};

	timeCount();
	let timerInterval = setInterval(timeCount, 1000);
};

export default timer;