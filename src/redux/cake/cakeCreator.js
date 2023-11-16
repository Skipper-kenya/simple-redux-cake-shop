import { BUY_CAKE } from "./actionTypes";

/**\
 * WE ARE CREATING A ACTION CREATOR FUNCTION AND EXPORTING IT. IT'LL BE USED WHEN WE DISPATCH AN ACTION USING THE useDispatch HOOK.
 */
const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

export default buyCake;
