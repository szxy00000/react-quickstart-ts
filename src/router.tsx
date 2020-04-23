import * as React from "react";
import { RouteConfig } from "react-router-config";
import * as pages from "pages";
import { Redirect } from "react-router-dom";

export const Config: RouteConfig[] = [
  {
    path: "/",
    component: pages.Layout,
    routes: [
      {
        path: "/",
        exact: true,
        component: () => <Redirect to="/demo"></Redirect>,
      },
      {
        title: "demo",
        path: "/demo",
        id: "demo",
        component: React.lazy(() =>
          import("pages/demo").then(
            ({ DemoPage }) => ({
              default: DemoPage
            })
          )
        ),
      },
      /*
      {
        title: "template",
        path: "/template",
        id: "template",
        component: pages.templatePage,
      }*/
    ],
  },
];
