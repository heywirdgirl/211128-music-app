import { Fragment } from 'react';

import MainHeader from './main-header';
import MainFooter from './main-footer';

function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      	<main className="flex mt-16 lg:mt-24">{props.children}</main>
      <MainFooter />
    </Fragment>
  );
}

export default Layout;
