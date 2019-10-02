// The store is the globalized state.
// The actions are the names of the thing you want to do.
// Reducers will describe how the actions will transform the STATE to the NEXT STATE and also the reducers will check what action you did and it will modify the store.
// Dispatch will be in charge of execute an specific action to the reducer and then the reducer will check what to do and finally the store gets updated.

import { createStore } from "redux";
import rootReducer from "./reducers";

// STORE
let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
