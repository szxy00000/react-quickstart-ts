/**
 * 页面
 */
import * as React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import { Header } from './header';

import "./page.less";

export interface PageProps extends RouteConfigComponentProps {
  name: string;
  menu?: React.ReactElement;
  loading?: boolean;
  error?: Error | null;
}

export const Page: React.SFC<PageProps> = props => {
  const { route, children, menu, name, loading = false, error = null } = props;
  if (!route) return null;

  return (
    <div className={"page page-" + name}>
      <Header title={route.title} menu={menu}></Header>

      <div>
        {(() => {
          if (loading) {
            return (
              <div className="page-loading"></div>
            )
          }

          if (error) {
            return (
              <p className="page-error">error</p>
            );
          }

          return children;
        })()}
      </div>
    </div>
  );
};
