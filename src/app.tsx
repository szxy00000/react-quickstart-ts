declare const window: any;
import * as React from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Config } from "router";
import { Provider } from "react-redux";
import { store } from "store";
import { Spin } from "antd";

export const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <React.Suspense fallback={<Spin />}>
          <HashRouter>{renderRoutes(Config)}</HashRouter>
        </React.Suspense>
      </Provider>
    </React.Fragment>
  );
};
