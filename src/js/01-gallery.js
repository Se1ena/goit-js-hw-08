// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = createGallaryItemMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGallaryItemMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image"
        src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
      `;
    })
    .join("");
}

let modalWindow;

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    const isGalleryRef = evt.target.classList.contains('gallery__image');
    if(!isGalleryRef){
        return;
    }
    console.log(evt.target);

    modalWindow = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)

modalWindow.show();
}

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});