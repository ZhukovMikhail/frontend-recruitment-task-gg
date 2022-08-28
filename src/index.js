import './sass/main.scss';
import refs from './js/refs';

// import { productsList } from './js/template'; for multiple cards template

//======================== nodes for multiple cards template case ==============================
// refs.gallery.insertAdjacentHTML('beforeend', productsList);
// const productBox = document.querySelector('.box');
// const productButton = document.querySelector('.button');

//=============== event listeners ================

refs.closeButton.addEventListener('click', toggleModal);
refs.modalClearCounter.addEventListener('click', onClearCount);
refs.productButton.addEventListener('click', toggleModal);
refs.productBox.addEventListener('click', openModalHandler);

let counterValue = 0;
JSON.parse(localStorage.getItem('counterValue')) > 0 &&
  (counterValue = JSON.parse(localStorage.getItem('counterValue')));

//================= callBack functions =================
function toggleModal() {
  if (refs.overlay.classList.contains('is-hidden')) {
    counterValue += 1;
    refs.modalCounter.textContent = counterValue;
    localStorage.setItem('counterValue', JSON.stringify(counterValue));
    counterValue >= 5
      ? refs.modalClearCounter.classList.remove('is-hidden')
      : refs.modalClearCounter.classList.add('is-hidden');
  }
  refs.overlay.classList.toggle('is-hidden');
}

function onClearCount() {
  localStorage.removeItem('counterValue');
  counterValue = 0;
  refs.modalCounter.textContent = counterValue;
  refs.modalClearCounter.classList.add('is-hidden');
}

//================= callBack functions fo Image click overlay =================

function openModalHandler(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  refs.imageOverlay.classList.remove('is-hidden');
  window.addEventListener('click', altModalCloseHandler);
  window.addEventListener('keydown', escapeHanler);
}
function closeModalHandler() {
  refs.imageOverlay.classList.add('is-hidden');
  window.removeEventListener('click', altModalCloseHandler);
  window.removeEventListener('keydown', escapeHanler);
}
function altModalCloseHandler(e) {
  if (e.target.nodeName === 'IMG') {
    return;
  }
  closeModalHandler();
}
function escapeHanler(e) {
  if (e.code !== 'Escape') {
    return;
  }
  closeModalHandler();
}
