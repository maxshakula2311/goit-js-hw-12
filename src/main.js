import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';
import renderFunctions from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', handleImageSearch);

function handleImageSearch(event) {
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

  renderFunctions.clearGallery();
  renderFunctions.showLoader();

  getImagesByQuery(inputValue)
    .then(response => {
      const images = response.data.hits;
      if (images.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching<br>your search query. Please try again!',
          messageColor: '#ffffff',
          backgroundColor: '#EF4040',
          position: 'topRight',
        });
        renderFunctions.hideLoader();
        return;
      }
      renderFunctions.createGallery(images);
      renderFunctions.hideLoader();
    })
    .catch(error => {
      iziToast.error({
        position: 'topRight',
        message: 'Something went wrong...',
        messageColor: 'black',
        backgroundColor: 'yellow',
        closeOnClick: true,
      });
      renderFunctions.hideLoader();
    });
  form.reset();
}