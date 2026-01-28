if (document.querySelector('.js-modal-trigger')){
  const modalTriggers = document.querySelectorAll('.js-modal-trigger');

function modalOpen(target){
  document.body.classList.add('body--modal-open');
  document.getElementById(target).classList.add('modal--open');
  window.addEventListener('keydown', modalListener)
}

function modalClose(){
  document.body.classList.remove('body--modal-open');
  document.querySelector('.modal--open').classList.remove('modal--open');
  window.removeEventListener('keydown', modalListener)
}

function modalListener(e){
  if (e.keyCode === 27){
    modalClose();
  }
}

function modalHandler(e){
  const modalTarget = e.currentTarget.dataset.targetModal;
  console.log(modalTarget)
  modalOpen(modalTarget)
}

for (const triggerBtn of document.querySelectorAll('.js-modal-trigger')){
  triggerBtn.addEventListener('click', modalHandler)
}

for (const closeBtn of document.querySelectorAll('.js-modal-close')){
  closeBtn.addEventListener('click', modalClose)
}

}