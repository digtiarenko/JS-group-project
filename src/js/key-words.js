import refs from './refs';

function keyWords(listFilms) {
  if (listFilms.length === 0) {
    refs.errorNoteRef.textContent = `Sorry, there no results found. Try searching for something else!`;
    refs.searchFormRef.textContent = '';
    return;
  }
}

export default keyWords;