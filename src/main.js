import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

const fShowProductsOnScreen = async () => {
  const sectionProductsEl = document.querySelector('section .products');
  const arrProducts = await fetchProductsList('computador');
  arrProducts.forEach((product) => {
    sectionProductsEl.appendChild(createProductElement(product));
  });
};

fShowProductsOnScreen();

document.querySelector('.cep-button').addEventListener('click', searchCep);
