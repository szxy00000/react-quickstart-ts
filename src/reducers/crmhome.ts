/**
 * 元数据
 */
import { combineReducers } from "redux";
import { UPDATE_crmhome_PROPS } from "actions";

export interface crmhomeState {
  crmhomeProps: { demo: number };
}

export const crmhome = combineReducers<crmhomeState>({
  crmhomeProps: (
    state = {
      demo: 1,
    },
    { payload, type }
  ) => {
    if (type !== UPDATE_crmhome_PROPS) return state;
    return { ...state, ...payload };
  },
});
