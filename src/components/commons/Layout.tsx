import { Outlet } from 'react-router-dom';
import Header from 'components/commons/Header';

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default Layout;
