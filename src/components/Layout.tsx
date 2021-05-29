import * as React from 'react';
import './Layout.css';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<Props> = (props: Props) => (
  <>
    <div className="container">{props.children}</div>
  </>
);

export default Layout;
