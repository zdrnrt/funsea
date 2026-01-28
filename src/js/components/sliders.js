import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
if (document.querySelector('.js-trip-list-slider')) {
	const tripListSlider = new Swiper('.js-trip-list-slider', {
		modules: [Navigation],
		slidesPerView: 3,
		spaceBetween: 6,
		navigation: {
			nextEl: '.js-trip-list-slider-next',
			prevEl: '.js-trip-list-slider-prev',
		},
		breakpoints: {
			560: {
				slidesPerView: 4.3,
				spaceBetween: 12,
			},
			1024: {
				slidesPerView: 7.5,
				spaceBetween: 24,
			},
		},
	});
	tripListSlider.on('slideChange', (swiper) => {
		if (swiper.isBeginning) {
			swiper.el.classList.remove('trip-list__list--start');
		} else {
			swiper.el.classList.add('trip-list__list--start');
		}
		if (swiper.isEnd) {
			swiper.el.classList.add('trip-list__list--end');
		} else {
			swiper.el.classList.remove('trip-list__list--end');
		}
	});
}

if (document.querySelector('.js-index-hits-slider')) {
	const indexHitsSlider = new Swiper('.js-index-hits-slider', {
		modules: [Navigation],
		slidesPerView: 1,
		spaceBetween: 12,
		navigation: {
			nextEl: '.js-index-hits-slider-next',
			prevEl: '.js-index-hits-slider-prev',
		},
		breakpoints: {
			560: {
				slidesPerView: 2.2,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 32,
			},
		},
	});
}

if (document.querySelector('.js-hero-slider')) {
	const heroSlider = new Swiper('.js-hero-slider', {
		modules: [Navigation, Pagination],
		slidesPerView: 1,
		pagination: {
			el: '.js-hero-slider-pagination',
			bulletElement: 'button',
			bulletClass: 'hero-slider-controls__bullet',
			bulletActiveClass: 'hero-slider-controls__bullet--active',
		},
		navigation: {
			nextEl: '.js-hero-slider-next',
			prevEl: '.js-hero-slider-prev',
		},
	});
}

if (document.querySelector('.js-index-category-slider')) {
	const indexCategorySliderParams = (slider) => ({
		modules: [Navigation],
		slidesPerView: 1,
		spaceBetween: 12,
		navigation: {
			nextEl: slider
				.closest('.index-categories__item')
				.querySelector('.js-index-category-slider-next'),
			prevEl: slider
				.closest('.index-categories__item')
				.querySelector('.js-index-category-slider-prev'),
		},
		breakpoints: {
			560: {
				slidesPerView: 2.2,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 32,
			},
		},
	});

	for (const categorySlider of document.querySelectorAll(
		'.js-index-category-slider',
	)) {
		new Swiper(categorySlider, indexCategorySliderParams(categorySlider));
	}
}

if (document.querySelector('.js-index-blog-slider')) {
	new Swiper('.js-index-blog-slider', {
		slidesPerView: 1,
		spaceBetween: 12,
		breakpoints: {
			560: {
				slidesPerView: 2.2,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 32,
			},
		},
	});
}

if (
	document.querySelector('.js-index-articles-slider') &&
	window.outerWidth < 1024
) {
	const indexArticlesSliderEl = document.querySelector(
		'.js-index-articles-slider',
	);
	const indexArticlesSlider = new Swiper('.js-index-articles-slider', {
		slidesPerView: 1.4,
		spaceBetween: 12,
		breakpoints: {
			560: {
				slidesPerView: 2.2,
			},
			1024: {
				enabled: false,
				spaceBetween: 0,
				slidesPerView: 3,
				grid: {
					rows: 2,
				},
			},
		},
	});
}
