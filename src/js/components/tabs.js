function tabToggle(e) {
	const target = e.currentTarget.dataset.targetTab;
	const tabTarget = document.querySelector(`[data-tab="${target}"]`);
	if (tabTarget.classList.contains('tabs__item--open')) {
		return;
	}
	
	const tabsNav = e.currentTarget.closest('.js-tabs-nav') || e.currentTarget.closest('.js-tabs');

	tabsNav.querySelector('.tabs__btn--active').classList.remove('tabs__btn--active');

	for (const btn of tabsNav.querySelectorAll('[data-target-tab]')){
		const target = btn.dataset.targetTab;
		const tab = document.querySelector(`[data-tab="${target}"].tabs__item--open`)
		if (tab){
			tab.classList.remove('tabs__item--open')
			break
		}
	}
	e.currentTarget.classList.add('tabs__btn--active');
	tabTarget.classList.add('tabs__item--open');
}

if (document.querySelector('.js-tab-trigger')) {
	for (const tabTrigger of document.querySelectorAll('.js-tab-trigger')) {
		tabTrigger.addEventListener('click', tabToggle);
	}
}
