export const fetchProduct = async (query) => {
  if (!query) throw new Error('ID não informado');

  return fetch(`https://api.mercadolibre.com/items/${query}`)
    .then((response) => response.json())
    .then((data) => data);
};

export const fetchProductsList = async (query) => {
  if (!query) throw new Error('Termo de busca não informado');
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
    .then((response) => response.json())
    .then((data) => data.results);
};
