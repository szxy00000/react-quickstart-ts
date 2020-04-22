import * as pure from "pures/template";
import axios from "axios";

export const UPDATE_PROPS = Symbol("UPDATE_PROPS");

export const templateActions = {
  updateProps: (payload) => (dispatch) => {
    return dispatch({
      type: UPDATE_PROPS,
      payload: payload,
    });
  }
};
