import * as pure from 'pures/demo';
import axios from 'axios';

export const UPDATE_PROPS = Symbol("UPDATE_PROPS");

export const demoActions = {
  updateProps: (payload) => dispatch => {
    return dispatch({
      type: UPDATE_PROPS,
      payload: payload,
    });
  },
  fetchData: param => dispatch => {
    axios.get('http://www.baidu.com').then((res) => {
      dispatch(
        demoActions.updateProps({
          test: pure.pureDemo(2)
        })
      );
    })
  }
};
