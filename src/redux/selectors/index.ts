import { RootType } from "../store";

export const dataForTableSelector = (state: RootType) => state.table.data;
