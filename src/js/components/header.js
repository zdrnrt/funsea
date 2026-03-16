if (document.querySelector('.js-header-menu-open')){
  function clickOutsideHeader(e){
    if (!e.target.closest('.js-header-menu')){
      toggleHeaderMenu()
    }
  }
  function toggleHeaderMenu(){
    document.querySelector('.js-header-menu').classList.toggle('header-menu--open')
    document.body.classList.toggle('header-menu--body-open')
    if (document.body.classList.contains('header-menu--body-open')){
      setTimeout(() => {document.body.addEventListener('click', clickOutsideHeader)}, 0)
    } else {
      document.body.removeEventListener('click', clickOutsideHeader)
    }
  }
  document.querySelector('.js-header-menu-open').addEventListener('click', toggleHeaderMenu)
  document.querySelector('.js-header-menu-close').addEventListener('click', toggleHeaderMenu)
}