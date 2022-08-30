// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createGallery(arrayOfImages) {
  const newGalleryItems = arrayOfImages
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
 `;
    })
    .join('');
  return newGalleryItems;
}
gallery.innerHTML = createGallery(galleryItems);

let galleryBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
galleryBox.on('show.simplelightbox', function () {});
