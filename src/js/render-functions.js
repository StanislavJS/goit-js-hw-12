import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery a');

const galleryElem = document.querySelector('.gallery');
const loaderElem = document.querySelector('.loader');
export const loadMoreElem = document.querySelector('.load-more');

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
      <li class="gallery-item">
        <a href="${largeImageURL}" class="gallery-link">
          <img src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="image-descr">
          <div class="image-descr-box">
            <p class="image-subtitle">likes</p>
            <span class="image-subtitle-quantity">${likes}</span>
          </div>
          <div class="image-descr-box">
            <p class="image-subtitle">views</p>
            <span class="image-subtitle-quantity">${views}</span>
          </div>
          <div class="image-descr-box">
            <p class="image-subtitle">comments</p>
            <span class="image-subtitle-quantity">${comments}</span>
          </div>
          <div class="image-descr-box">
            <p class="image-subtitle">downloads</p>
            <span class="image-subtitle-quantity">${downloads}</span>
          </div>
        </div>
      </li>
        `;
      }
    )
    .join('');

  galleryElem.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryElem.innerHTML = '';
}

export function showLoader() {
  loaderElem.classList.remove('hidden');
}

export function hideLoader() {
  loaderElem.classList.add('hidden');
}

export function showLoadMoreButton() {
  loadMoreElem.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreElem.classList.add('hidden');
}