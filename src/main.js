import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';

const gSectionProductsEl = document.querySelector('section .products');
const gCartProductsEl = document.querySelector('.cart__products');
const gTotalPriceEl = document.querySelector('.total-price');

const fLoadingError = () => {
  const gSpanEl = document.querySelector('.loading');
  gSpanEl.className = 'error';
  gSpanEl.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
};

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

const getFromLocalStorage = async () => {
  const arrProductsOnLocalStorage = JSON.parse(localStorage.getItem('cartProducts'));
  if (arrProductsOnLocalStorage) {
    const arrPromise = arrProductsOnLocalStorage.map((id) => fetchProduct(id));
    const arrProductsEl = await Promise.all(arrPromise)
      .then((response) => response);
    arrProductsEl.forEach((product) => {
      gCartProductsEl.appendChild(createCartProductElement(product));
    });
  }
};
getFromLocalStorage();

window.onload = () => {
  if (JSON.parse(localStorage.getItem('totalPrice'))) {
    gTotalPriceEl.innerHTML = JSON.parse(localStorage.getItem('totalPrice'));
  }
};

document.querySelector('.cep-button').addEventListener('click', searchCep);
