import { GET_CRYPTO, SORT_BY_PRICE, SORT_BY_RANK } from '../actions/types';

const initialState = {
    cryptos: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CRYPTO:
            return {
                ...state,
                cryptos: action.payload
            };
        case SORT_BY_PRICE:
            return {
                ...state,
                cryptos: action.payload
            };
        case SORT_BY_RANK:
            return {
                ...state,
                cryptos: action.payload
            };
        default:
            return state
    }
}
