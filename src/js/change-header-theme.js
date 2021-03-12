import refs from './refs';
import clearList from './clear-movie-list';

export function onSiteNavButtonsClick(event) {
    const element = event.target;

    if (element === refs.libraryHeaderBtn) {
        goToLibraryPage();
        clearList();
    } else if (element === refs.homeHeaderBtn || element.parentElement === refs.logoNav) {
        goToHomePage();
    }
    
}

function goToHomePage() {
    refs.headerContainer.classList.remove('header-container--library');
    refs.headerContainer.classList.add('header-container--home');
    refs.headerNavContainer.classList.remove('header-nav-container--library');
    refs.libraryList.style.display = "none";
    refs.searchForm.style.display = "block";
    refs.homeHeaderBtn.classList.add('is-active');
    refs.libraryHeaderBtn.classList.remove('is-active');
    refs.clearBtnContainer.style.display = "none";
    refs.searchForm.reset();
}

function goToLibraryPage() {
    refs.headerContainer.classList.remove('header-container--home');
    refs.headerContainer.classList.add('header-container--library');
    refs.headerNavContainer.classList.add('header-nav-container--library');
    refs.libraryList.style.display = "flex";
    refs.searchForm.style.display = "none";
    refs.libraryHeaderBtn.classList.add('is-active');
    refs.homeHeaderBtn.classList.remove('is-active');
}


refs.siteNavButtons.addEventListener('click', onSiteNavButtonsClick);
refs.logoNav.addEventListener('click', onSiteNavButtonsClick);