/**
 * 元数据
 */
import { combineReducers } from "redux";
import {
  UPDATE_PROPS
} from "actions";

export interface demoState {
  demoProps: { test: number };
}

export const demo = combineReducers<demoState>({
  demoProps: (
    state = {
      test: 1,
    },
    { payload, type }
  ) => {
    if (type !== UPDATE_PROPS) return state;
    return { ...state, ...payload };
  },
});
