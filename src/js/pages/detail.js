if (document.querySelector('.js-detail-text-more')){
  document.querySelector('.js-detail-text-more').addEventListener('click', () => {
    document.querySelector('.js-detail-text').classList.add('detail-text--expand')
  }, {once: true})
}