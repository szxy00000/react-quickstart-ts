// import * as pure from "pures/crmhome";
import axios from "axios";

export const UPDATE_crmhome_PROPS = Symbol("UPDATE_crmhome_PROPS");

export const crmhomeActions = {
  updateProps: (payload) => (dispatch) => {
    return dispatch({
      type: UPDATE_crmhome_PROPS,
      payload: payload,
    });
  }
};
