function clickOutsideAside(e){
  if (!e.target.closest('.detail-aside__container')){
    toggleExpandDetailAside()
  }
}
function toggleExpandDetailAside(){
  const aside = document.querySelector('.js-detail-aside');
  aside.classList.toggle('detail-aside--expand');
  document.body.classList.toggle('detail-aside--body-expand');
  if (aside.classList.contains('detail-aside--expand')){
    setTimeout(() => {document.body.addEventListener('click', clickOutsideAside)}, 0)
  } else {
    document.body.removeEventListener('click', clickOutsideAside)
  }
}
if (document.querySelector('.js-detail-aside-trigger')){
  document.querySelector('.js-detail-aside-trigger').addEventListener('click', toggleExpandDetailAside)
}