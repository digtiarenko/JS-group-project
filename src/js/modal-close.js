// import './modal.js'
import refs from './refs';

function nodeCheckClosing(event) {
    if (event.target.classList.value !== 'backdrop') {
      return
    }
  closingModal();
}

refs.closeBtn.addEventListener('click', closingModal);
refs.backdropModalRef.addEventListener('click', nodeCheckClosing);
refs.filmListRef.addEventListener('click', openingModal);

function openingModal() {
  if (event.target.classList.contains('films__list')){return;}
  const id = event.path.find(elem => elem.classList.value === 'film item')
    .dataset.movieid;

  const all = JSON.parse(localStorage.getItem('watched') || '[]');
  if (all.includes(id)) {
    refs.addToWatchedBtn.innerHTML = 'REMOVE FROM WATCHED';
  }

  const all2 = JSON.parse(localStorage.getItem('queue') || '[]');
  if (all2.includes(id)) {
    refs.addToQueueBtn.innerHTML = 'REMOVE FROM QUEUE';
  }

  refs.backdropModalRef.classList.remove('visually-hidden');
  refs.modalRef.classList.remove('visually-hidden');
  refs.bodyEl.classList.add('modal-is-open');
  // console.log('cliked');
  window.addEventListener('keydown', onEscPress);

}

function closingModal() {
  refs.backdropModalRef.classList.add('visually-hidden');
  refs.modalRef.classList.add('visually-hidden');
  window.removeEventListener('keydown', onEscPress);
  refs.bodyEl.classList.remove('modal-is-open');
  setTimeout(clearData(),100)
}

function clearData () {
  refs.modalImg.src = '';
  refs.modalTitle.textContent = '';
  refs.rate.textContent = '';
  refs.votes.textContent = '';
  refs.popularity.textContent = '';
  refs.title.textContent = '';
  refs.genre.textContent = '';
  refs.descr.textContent = '';
  refs.addToWatchedBtn.innerHTML = 'ADD TO WATCHED';
  refs.addToQueueBtn.innerHTML = 'ADD TO QUEUE';

}

function onEscPress(event) {
  if (event.code === 'Escape') closingModal();
}

export default openingModal;