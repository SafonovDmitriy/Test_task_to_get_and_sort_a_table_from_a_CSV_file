import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { PricingTableReducer } from "./reducers/pricingTableReducer";

const reducers = combineReducers({
  pricingTable: PricingTableReducer,
});
const isProduction = process.env.NODE_ENV === "production";

const store = createStore(
  reducers,
  isProduction
    ? applyMiddleware(thunk)
    : composeWithDevTools(applyMiddleware(thunk))
);
export type RootType = ReturnType<typeof reducers>;
export default store;
