import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import Header from 'components/commons/Header';
import GlobalStyle from 'components/commons/GlobalStyles';

const Layout = () => (
  <>
    <GlobalStyle />
    <Header />
    <MainCenter>
      <Outlet />
    </MainCenter>
  </>
);

export default Layout;

const MainCenter = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 90rem;
  min-width: 30rem;
  margin: 0 auto;
`;
