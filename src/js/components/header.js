if (document.querySelector('.js-header-menu-open')){
  function toggleHeaderMenu(){
    document.querySelector('.js-header-menu').classList.toggle('header-menu--open')
    document.body.classList.toggle('header-menu--body-open')
  }
  document.querySelector('.js-header-menu-open').addEventListener('click', toggleHeaderMenu)
  document.querySelector('.js-header-menu-close').addEventListener('click', toggleHeaderMenu)
  document.querySelector('.js-catalog-menu-open').addEventListener('click', toggleHeaderMenu)
}