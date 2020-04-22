/**
 * 侧边栏
 */
import * as React from "react";
import { Storage } from "services";
import { useDispatch } from "react-redux";
import { RouteConfigComponentProps } from "react-router-config";

import "./sidebar.less";

export interface SidebarProps extends RouteConfigComponentProps {
  
}

export const Sidebar: React.SFC<SidebarProps> = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">

    </div>
  );
};
