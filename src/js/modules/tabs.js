const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
	const header = document.querySelector(headerSelector),
		tab = document.querySelectorAll(tabSelector),
		content = document.querySelectorAll(contentSelector);

	function hideTabContent() {
		content.forEach(item => {
			item.style.display = 'none';
		});

		tab.forEach(item => {
			if (item.classList.contains(activeClass)) { item.classList.remove(activeClass) };
		});
	}
	function showTabContent(i = 0) {
		content[i].style.display = 'block';
		tab[i].classList.add(activeClass);
	}

	hideTabContent();
	showTabContent();

	header.addEventListener('click', (e) => {
		const target = e.target;

		if (target && target.closest(tabSelector)) {
			e.preventDefault();
			tab.forEach((item, i) => {
				if (target.closest(tabSelector) == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});

};



export default tabs;