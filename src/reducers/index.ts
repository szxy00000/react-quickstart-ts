import { combineReducers } from "redux";
import { demo, demoState } from "./demo";
import { crmhome, crmhomeState } from "./crmhome";
/* import { template, templateState } from "./template"; */

export * from "./demo";
export * from "./crmhome";
/* export * from "./template"; */

export interface StoreState {
  demo: demoState;
  crmhome: crmhomeState;
  /* template: templateState */
}

export const reducer = combineReducers<StoreState>({
  demo,
  crmhome,
  /* template, */
});
