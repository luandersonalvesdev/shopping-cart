import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

const gSectionProductsEl = document.querySelector('section .products');

const fVerifyResponseApi = async () => {
  const response = await fetchProductsList('computador');
  if (Array.isArray(response)) {
    return response;
  }
  return false;
};

const fLoadingError = () => {
  const gSpanEl = document.querySelector('.loading');
  gSpanEl.className = 'error';
  gSpanEl.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
}

const fLoading = () => {
  gSectionProductsEl.innerHTML = '';
  const cSpanEl = document.createElement('span');
  cSpanEl.className = 'loading';
  cSpanEl.innerHTML = 'carregando...';
  gSectionProductsEl.appendChild(cSpanEl);
};

const fShowProductsOnScreen = async () => {
  try {
    fLoading();
    const responseApi = await fetchProductsList('computador');
    gSectionProductsEl.innerHTML = '';
    responseApi.forEach((product) => {
      gSectionProductsEl.appendChild(createProductElement(product));
    });
  } catch (e) {
    fLoadingError();
  }
};

fShowProductsOnScreen();

document.querySelector('.cep-button').addEventListener('click', searchCep);
