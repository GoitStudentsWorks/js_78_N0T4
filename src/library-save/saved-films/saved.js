import { renderPhotoCard } from '../../common/card/card.js';
const myLibraryElement = document.querySelector('.my-library-section');

let storedFilms = JSON.parse(localStorage.getItem('my library'));

// function createMyLibraryCatalog(savedFilms, parentElement) {
//   savedFilms.map(film => {});
// }
if (storedFilms) {
  storedFilms.forEach(film => {
    renderPhotoCard(film, myLibraryElement);
  });
}
