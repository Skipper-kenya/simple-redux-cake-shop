import { BUY_CAKE } from "./actionTypes";

/**
 * INITIALIZING THE STATE OF OUR CAKE SHOP WHEN WE OPEN UP
 */
const initialState = {
  numOfCakes: 20,
};

/**
 * WE ARE DEFINING A REDUCER FUNCTION WHICH WILL DECIDE HOW THE INITAL STATE OF THE CAKES WILL BE AFTER USERS DISPATCH THE ACTION OF PURCHASING CAKES FROM OUR SHOP.
 * WE ARE ALSO EXPORTING THE FUNCTION, IT WILL BE USED BY THE store.js FUNCTION WHEN WE CREATE OUR STORE
 */
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

export default cakeReducer;
