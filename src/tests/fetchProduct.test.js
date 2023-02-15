import './mocks/fetchSimulator';
import { fetchProduct, fetchProductsList } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('Teste se fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });
  it('Execute a função fetchProduct com o argumento do produto "MLB1405519561" e teste se fetch foi chamada', () => {
    fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });
  it('Teste se, ao chamar a função fetchProduct com o argumento do produto "MLB1405519561", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1405519561"', () => {
    const expected = 'https://api.mercadolibre.com/items/MLB1405519561';
    fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith(expected);
  });
  it('Teste se o retorno da função fetchProduct com o argumento do produto "MLB1405519561" é uma estrutura de dados igual ao objeto produto que já está importado no arquivo.', async () => {
    const actual = await fetchProduct('MLB1405519561');
    expect(actual).toEqual(product);
  })
  it('Teste se, ao chamar a função fetchProduct sem argumento, retorna um erro com a mensagem: "ID não informado".', () => {
    // const actual = fetchProduct();
    expect(async () => {await fetchProduct()}).rejects.toThrow('ID não informado');
  });
});
