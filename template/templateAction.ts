import * as pure from "pures/template";
import axios from "axios";

export const UPDATE_template_PROPS = Symbol("UPDATE_template_PROPS");

export const templateActions = {
  updateProps: (payload) => (dispatch) => {
    return dispatch({
      type: UPDATE_template_PROPS,
      payload: payload,
    });
  }
};
