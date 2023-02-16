const gSpanAddress = document.querySelector('.cart__address');
const gInputAddress = document.querySelector('.cep-input');
const erroMessage = 'CEP não encontrado';

export const getAddress = async (CEP) => {
  const PROMISE_1 = await fetch(`https://cep.awesomeapi.com.br/json/${CEP}`).then((response) => response.json());
  const PROMISE_2 = await fetch(`https://brasilapi.com.br/api/cep/v2/${CEP}`).then((response) => response.json());
  return Promise.any([PROMISE_1, PROMISE_2]);
};

export const searchCep = async () => {
  gSpanAddress.innerHTML = '';
  try {
    const { address,
      street,
      district,
      neighborhood,
      state,
      city } = await getAddress(gInputAddress.value);
    if (city === undefined) {
      throw new Error(erroMessage);
    }
    gSpanAddress.innerHTML = `${address ?? street} - ${district ?? neighborhood
    } - ${city} - ${state}`;
  } catch (error) {
    gSpanAddress.innerHTML = erroMessage;
  }
};
