if (document.querySelector('.tabs')) {
	function tabToggle(e) {
		const target = e.currentTarget.dataset.targetTab;
		const tabTarget = document.querySelector(`[data-tab="${target}"]`);
		if (tabTarget.classList.contains('tabs__item--open')) {
			return;
		}
		const tabContainer = e.currentTarget.closest('.js-tabs');
		tabContainer
			.querySelector('.tabs__btn--active')
			.classList.remove('tabs__btn--active');
		e.currentTarget.classList.add('tabs__btn--active');

		tabContainer
			.querySelector('.tabs__item--open')
			.classList.remove('tabs__item--open');
		tabTarget.classList.add('tabs__item--open');
	}

	for (const tabTrigger of document.querySelectorAll('.js-tab-trigger')) {
		tabTrigger.addEventListener('click', tabToggle);
	}
}
