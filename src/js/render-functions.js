import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader-box');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const createGallery = images => {
  const galleryMarkup = images
    .map(
      image => `<li class="gallery-item">
            <a href=${image.largeImageURL} class="gallery-link">
              <img
                class="gallery-img"
                src=${image.webformatURL}
                alt="${image.tags}"
                loading="lazy"
              />
            </a>  
            <div class="img-desc-box">
              <p class="img-desc">
                <span class="desc-title">Likes</span>
                <span class="desc-text">${image.likes}</span>
              </p>
              <p class="img-desc">
                <span class="desc-title">Views</span>
                <span class="desc-text">${image.views}</span>
              </p>
              <p class="img-desc">
                <span class="desc-title">Comments</span>
                <span class="desc-text">${image.comments}</span>
              </p>
              <p class="img-desc">
                <span class="desc-title">Downloads</span>
                <span class="desc-text">${image.downloads}</span>
              </p>
            </div>
          </li>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', galleryMarkup);

  lightbox.refresh();
};

const clearGallery = () => {
  gallery.innerHTML = '';
};
const showLoader = () => {
  loader.classList.add('is-visible');
};
const hideLoader = () => {
  loader.classList.remove('is-visible');
};
export default { createGallery, clearGallery, showLoader, hideLoader };  