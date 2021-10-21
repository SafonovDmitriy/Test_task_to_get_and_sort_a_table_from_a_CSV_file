import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { PricingTableReducer } from "./reducers/pricingTableReducer";

const reducers = combineReducers({
  PricingTable: PricingTableReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export type RootType = ReturnType<typeof reducers>;
export default store;
