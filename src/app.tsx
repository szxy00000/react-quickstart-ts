declare const window: any;
import * as React from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Config } from "router";
import { Provider } from "react-redux";
import { store } from "store";

export const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <HashRouter>{renderRoutes(Config)}</HashRouter>
      </Provider>
    </React.Fragment>
  );
};
