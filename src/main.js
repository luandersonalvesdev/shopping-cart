import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

const fLoading = () => {
  const cDivEl = document.createElement('span');
  cDivEl.innerHTML = 'carregando...';
  cDivEl.className = 'loading';
  return cDivEl;
};

const fShowProductsOnScreen = async () => {
  const gSectionProductsEl = document.querySelector('section .products');
  gSectionProductsEl.appendChild(fLoading());
  const arrProducts = await fetchProductsList('computador');
  gSectionProductsEl.innerHTML = '';
  arrProducts.forEach((product) => {
    gSectionProductsEl.appendChild(createProductElement(product));
  });
};

fShowProductsOnScreen();

document.querySelector('.cep-button').addEventListener('click', searchCep);
