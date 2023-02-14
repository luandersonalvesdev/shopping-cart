export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = (query) => {
  if (!query) {
    throw new Error('Termo de busca não informado');
  }
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
    .then((response) => response.json())
    .then((data) => data.results);
};
