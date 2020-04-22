/**
 * 头部
 */
import * as React from 'react';
import "./header.less";

export interface HeaderProps {
  title: string;
  menu?: React.ReactElement;
}

export const Header: React.SFC<HeaderProps> = props => {
  const { title, menu } = props;

  return (
    <header className="header">
      <h2 className="header-title">{title}</h2>
      {menu && <div className="header-menu">{menu}</div>}
    </header>
  )
}