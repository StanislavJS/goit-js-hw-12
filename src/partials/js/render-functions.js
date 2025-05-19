import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery a')

const galerryElem = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
export const loafMoreElem= document.querySelector('.load-more');


export function createGallery(images) {
const marcup = images
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


}
galerryElem.insertAdjacentHTML('beforeend', marcup);
    lightbox.refresh();

export function clearGallery() {
  galerryElem.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  loafMoreElem.classList.remove('hidden');
}
export function hideLoadMoreButton() {
  loafMoreElem.classList.add('hidden');
}