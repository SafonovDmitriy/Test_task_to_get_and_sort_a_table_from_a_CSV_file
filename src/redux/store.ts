import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { pricingTablesReducer } from "./reducers/pricingTablesReducer";

const reducers = combineReducers({
  pricingTables: pricingTablesReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export type RootType = ReturnType<typeof reducers>;
export default store;
