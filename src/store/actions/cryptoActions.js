import { GET_CRYPTO, SORT_BY_PRICE, SORT_BY_RANK } from './types';
import axios from 'axios';

export const getCrypto = () => dispatch => {
    axios.get("https://api.coinmarketcap.com/v2/ticker/?limit=2200")
    .then(res => {
        const cryptoData = res.data.data;
        dispatch({
            type: GET_CRYPTO,
            payload:cryptoData
     })
     })
};
export const sortByPrice = () => (dispatch,getCrypto) => {
    const cryptoData = Object.values(getCrypto().reducer.cryptos);
    const sorted_cryptosByPrice = cryptoData.sort(
        (a, b) => b.quotes.USD.price - a.quotes.USD.price
  );
  dispatch({
    type: SORT_BY_PRICE,
    payload: sorted_cryptosByPrice
  });
 
}

export const sortByRank = () => (dispatch,getCrypto) => {
    const cryptoData = Object.values(getCrypto().reducer.cryptos);        
    const sorted_cryptosByRank = cryptoData.sort(
        (a, b) => a.rank - b.rank
  );
  dispatch({
    type: SORT_BY_RANK,
    payload: sorted_cryptosByRank
  });

}


   

