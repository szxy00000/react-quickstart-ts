declare const window: any;
import * as React from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import { Sidebar } from "./sidebar";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import "./layout.less";

interface LayoutProps extends RouteConfigComponentProps {}

export const Layout: React.SFC<LayoutProps> = (props) => {
  const dispatch = useDispatch();

  const { route } = props;

  return (
    <div className="layout">
      <Sidebar {...props} /> 
      <div className="main">
        {route && renderRoutes(route.routes)}
      </div>
    </div>
  );
};
