// Оновлений main.js
import { getImagesByQuery, imagesOnPage } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  loadMoreElem,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formElem = document.querySelector('.form');
const inputElem = formElem.querySelector('input[name="search-text"]');

let liElem;
let heightScroll = 0;
let inputData = '';
let page = 1;

formElem.addEventListener('submit', handleFormSubmit);

if (loadMoreElem) {
  loadMoreElem.addEventListener('click', async () => {
    page++;
    hideLoadMoreButton();
    await showImagesOnPage();
    scrollWin(0, heightScroll);
  });
} else {
  console.warn('Load More button element not found!');
}

async function handleFormSubmit(event) {
  event.preventDefault();
  inputData = inputElem.value.trim().toLowerCase();
  page = 1;

  if (!inputData) {
    iziToast.warning({
      message: 'The input field is empty, try again.',
      position: 'center',
    });
    return;
  }

  clearGallery();
  await showImagesOnPage();
}

async function showImagesOnPage() {
  showLoader();
  try {
    const data = await getImagesByQuery(inputData, page);

    if (!data.hits || data.hits.length === 0) {
      hideLoadMoreButton();
      iziToast.warning({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'center',
      });
      return;
    }

    createGallery(data.hits);

    liElem = document.querySelector('.gallery-item');
    if (liElem) {
      heightScroll = liElem.getBoundingClientRect().height * 2;
    }

    const maxPages = Math.ceil(data.totalHits / imagesOnPage);

    if (page < maxPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    hideLoadMoreButton();
    iziToast.error({
      message: 'An error occurred. Please try again later.',
      position: 'center',
    });
  } finally {
    hideLoader();
  }
}

function scrollWin(x, y) {
  window.scrollBy({
    top: y,
    left: x,
    behavior: 'smooth',
  });
}
