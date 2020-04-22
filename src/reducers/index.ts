import { combineReducers } from "redux";
import { demo, demoState } from "./demo";
/* import { template, templateState } from "./template"; */

export * from "./demo";
/* export * from "./template"; */

export interface StoreState {
  demo: demoState;
  /* template: templateState */
}

export const reducer = combineReducers<StoreState>({
  demo,
  /* template, */
});
