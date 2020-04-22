/**
 * 元数据
 */
import { combineReducers } from "redux";
import { UPDATE_template_PROPS } from "actions";

export interface templateState {
  templateProps: { demo: number };
}

export const template = combineReducers<templateState>({
  templateProps: (
    state = {
      demo: 1,
    },
    { payload, type }
  ) => {
    if (type !== UPDATE_template_PROPS) return state;
    return { ...state, ...payload };
  },
});