import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';
import renderFunctions from './js/render-functions';

const form = document.querySelector('.form');
const loadBtn = document.querySelector('.load-btn');

let currentPage = 1;
const perPage = 15;
let currentQuery = '';
let totalPages = 0;

form.addEventListener('submit', handleImageSearch);
loadBtn && loadBtn.addEventListener('click', handleLoadMore);

function scrollByGalleryCardHeight() {
  const galleryItem = document.querySelector('.gallery-item');
  if (!galleryItem) return;
  const cardHeight = galleryItem.getBoundingClientRect().height;
  window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
}

async function handleImageSearch(event) {
  event.preventDefault();
  const inputValue = event.target['search-text'].value.trim();

  if (inputValue === '') {
    iziToast.error({
      position: 'topRight',
      message: 'Please enter your request in the search field!',
      messageColor: 'black',
      backgroundColor: 'yellow',
    });
    return;
  }

  currentQuery = inputValue;
  currentPage = 1;

  renderFunctions.clearGallery();
  renderFunctions.hideLoadBtn && renderFunctions.hideLoadBtn();
  renderFunctions.showLoader();

  try {
    const response = await getImagesByQuery(currentQuery, currentPage, perPage);
    const images = response.data.hits;
    const totalHits = response.data.totalHits || 0;
    totalPages = Math.ceil(totalHits / perPage) || 0;

    if (images.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching<br>your search query. Please try again!',
        messageColor: '#ffffff',
        backgroundColor: '#EF4040',
        position: 'topRight',
      });
      renderFunctions.hideLoadBtn && renderFunctions.hideLoadBtn();
      return;
    }

    renderFunctions.createGallery(images);

    if (currentPage >= totalPages) {
      renderFunctions.hideLoadBtn && renderFunctions.hideLoadBtn();
      iziToast.warning({ message: "We're sorry, but you've reached the end of search results.", position: 'topRight' });
    } else {
      renderFunctions.showLoadBtn && renderFunctions.showLoadBtn();
      scrollByGalleryCardHeight();
    }
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: 'Something went wrong...',
      messageColor: 'black',
      backgroundColor: 'yellow',
      closeOnClick: true,
    });
  } finally {
    renderFunctions.hideLoader();
    form.reset();
  }
}

async function handleLoadMore() {
  if (!currentQuery) return;
  currentPage += 1;
  renderFunctions.hideLoadBtn && renderFunctions.hideLoadBtn();
  renderFunctions.showLoader();
  try {
    const response = await getImagesByQuery(currentQuery, currentPage, perPage);
    const images = response.data.hits;
    const totalHits = response.data.totalHits || 0;
    totalPages = Math.ceil(totalHits / perPage) || 0;

    renderFunctions.createGallery(images);

    if (currentPage >= totalPages) {
      renderFunctions.hideLoadBtn && renderFunctions.hideLoadBtn();
      iziToast.warning({ message: "We're sorry, but you've reached the end of search results.", position: 'topRight' });
    } else {
      renderFunctions.showLoadBtn && renderFunctions.showLoadBtn();
    }

    scrollByGalleryCardHeight();
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: 'Something went wrong...',
      messageColor: 'black',
      backgroundColor: 'yellow',
      closeOnClick: true,
    });
  } finally {
    renderFunctions.hideLoader();
  }
}