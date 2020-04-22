import { combineReducers } from "redux";
import { demo, demoState } from "./demo";

export * from "./demo";

export interface StoreState {
  demo: demoState;
}

export const reducer = combineReducers<StoreState>({
  demo,
});
