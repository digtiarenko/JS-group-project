import refs from './refs';



refs.openModal.addEventListener('click', onOpenModal);
refs.btnClose.addEventListener('click', onModalCloseDiv);
refs.divLightbox.addEventListener('click', closingOnDiv);
document.addEventListener('keydown', onModalCloseEsc);

function closingOnDiv(event) {

    if (event.target != this) return;

    onModalCloseDiv();

}

function onModalCloseDiv() {
    refs.modalOpen.classList.add('slideUpOut');
    refs.modalOpen.classList.remove('slideUpIn');
    refs.divLightbox.classList.remove('is-open');
    refs.bodyEl.classList.remove('is-open');
}

function onModalCloseEsc(event) {
    if (event.key === 'Escape') {
        onModalCloseDiv();
    }
}

function onOpenModal(event) {
    event.preventDefault();
    refs.modalOpen.classList.remove('slideUpOut');
    refs.divLightbox.classList.add('is-open');
    refs.bodyEl.classList.add('is-open');
    refs.modalOpen.classList.add('slideUpIn');

}
export default onModalCloseDiv;