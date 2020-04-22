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
        id: "3",
        component: pages.DemoPage,
      },{
        title: "crmhome",
        path: "/crmhome",
        id: "3",
        component: pages.CrmhomePage,
      },/*
      {
        title: "template",
        path: "/template",
        id: "3",
        component: pages.templatePage,
      }*/
    ],
  },
];
