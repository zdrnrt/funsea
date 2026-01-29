if (document.querySelector('.js-detail-text') || document.querySelector('.js-detail-text-more')){
  // &--more
  document.querySelector('.js-detail-text-more').addEventListener('click', () => {
    document.querySelector('.js-detail-text').classList.add('detail-text--more')
  }, {once: true})
}