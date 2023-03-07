// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryCard(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

function createGalleryCard(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    src="${preview}"
                    alt="${description}"
                    data-source="${original}"
                    class="gallery__image"
                >
            </a>
        </div>
        `;
    })
        .join('');

}


const lightbox = new SimpleLightbox('.gallery a',
  {
    captionsData: 'alt',
    captionPosition: 'outside',
    captionDelay: 250,
  });