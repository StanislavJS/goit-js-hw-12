import axios from 'axios';

export const ImagesOnPage = 12;

export async function getImagesByQuery(query, page) {
  const BASE_URL = 'https://pixabay.com/api/';

  const params = {
    q: query,
    key: '50332373-9569dbbbff196a639bf3485f1',
    image_type: 'photo',
    orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: ImagesOnPage,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response;
  } catch (error) {
   throw new Error(`${error.message}`);
  }
}