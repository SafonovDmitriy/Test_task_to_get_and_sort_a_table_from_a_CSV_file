import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { tableReducer } from "./reducers/table";

const reducers = combineReducers({
  table: tableReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export type RootType = ReturnType<typeof reducers>;
export default store;
