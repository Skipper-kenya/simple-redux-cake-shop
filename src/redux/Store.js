import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";


/**
 * WE USE THE createStore() WHICH ACCEPTS REDUCERS AS ARGUMENTS TO CREATE OUR STORE AND EXPORT IT TO THE ROOT index.js FILE WHERE IT'LL BE USED BY THE PROVIDER TO AVAIL OUR CAKE SHOP ACTIONS AND STATES
 */
const store = createStore(cakeReducer);

export default store;
