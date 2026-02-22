import Swiper from 'swiper';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
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
		slidesPerView: 1.1,
		spaceBetween: 12,
		autoHeight: true,
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
	document.querySelector('.js-articles-section-slider') &&
	window.innerWidth < 1024
) {
	new Swiper('.js-articles-section-slider', {
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
if (document.querySelector('.js-adventures-slider')){
	const adventuresSlider = new Swiper('.js-adventures-slider', {
	// new Swiper('.js-adventures-slider', {
		modules: [Mousewheel, Navigation],
		mousewheel: {
			enabled: true,
			forceToAxis: true,
			// sensitivity: 1
			// invert: true
		},
		slidesPerView: 1,
		spaceBetween: 12,
		breakpoints: {
			560: {
				slidesPerView: 1.2,
			},
			1024: {
				slidesPerView: 1.6,
				spaceBetween: 32,
				navigation: {
					nextEl: '.js-adventures-slider-next',
					prevEl: '.js-adventures-slider-prev',
				},
			},
		},
	});

	adventuresSlider.on('slideChange', (swiper) => {
		if (swiper.isBeginning) {
			swiper.el.classList.remove('detail-adventures__list--start');
		} else {
			swiper.el.classList.add('detail-adventures__list--start');
		}
		if (swiper.isEnd) {
			swiper.el.classList.add('detail-adventures__list--end');
		} else {
			swiper.el.classList.remove('detail-adventures__list--end');
		}
	});
}


if (document.querySelector('.js-stories-slider')) {
	
	const indexStoriesSlider = new Swiper('.js-stories-slider', {
		modules: [Navigation, Pagination],
		slidesPerView: 1,
		spaceBetween: 24,
		breakpoints: {
			560: {
				slidesPerView: 2.2,
			},
			1024: {
				slidesPerView: 3.3,
				pagination: false
			},
		},
		pagination: {
			el: '.js-stories-slider-pagination',
			bulletElement: 'button',
			bulletClass: 'stories-list-controls__bullet',
			bulletActiveClass: 'stories-list-controls__bullet--active',
		},
		navigation: {
			nextEl: '.js-stories-slider-next',
			prevEl: '.js-stories-slider-prev',
		},
	});
	if (window.innerWidth >= 1024){
		indexStoriesSlider.on('slideChange', (swiper) => {
			if (swiper.isBeginning) {
				swiper.el.classList.remove('stories-list__list--start');
			} else {
				swiper.el.classList.add('stories-list__list--start');
			}
			if (swiper.isEnd) {
				swiper.el.classList.add('stories-list__list--end');
			} else {
				swiper.el.classList.remove('stories-list__list--end');
			}
		});
	}

}