import { IAction, ITableState } from "../actionInterfaces/table";
import { tableActionTypes } from "../actionTypes/table";

const initialState: ITableState = {
  data: [],
};

export const tableReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case tableActionTypes.FETCH_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
