import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function')
  });

  it('fetch é chamado ao executar fetchProductsList', () => {
    fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    const expected = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith(expected);
  });

  it('Teste se o retorno da função fetchProductsList com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
    const actual = await fetchProductsList('computador');
    expect(actual).toEqual(computadorSearch);
  })

  it('Teste se, ao chamar a função fetchProductsList sem argumento, retorna um erro com a mensagem: "Termo de busca não informado"', () => {
    expect(async () => {await fetchProductsList()}).rejects.toThrow('Termo de busca não informado');
  })
});
