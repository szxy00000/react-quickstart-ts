import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./app";

function renderer(Elm: React.ReactElement) {
  ReactDOM.render(Elm, document.getElementById("app"));
}

renderer(<App />);

if (module.hot) {
  module.hot.accept("./app", () => {
    import("./app").then(NextApp => renderer(<NextApp.App />));
  });
}
