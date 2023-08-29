import { styled } from 'styled-components';
import { OWNER, REPOSITORY } from 'configs/octokit';
import { capitalize } from 'utils/format';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderCenter>
      <StyledLink to="/">
        <StyledSpan>{capitalize(OWNER)}</StyledSpan>
        <StyledSpan>{capitalize(REPOSITORY)}</StyledSpan>
      </StyledLink>
    </HeaderCenter>
  );
};

export default Header;

const HeaderCenter = styled.header`
  height: 5rem;
  background-color: white;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  flex-direction: row;
  position: sticky;
  top: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSpan = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  &:first-of-type:after {
    content: '/';
    margin: 0 0.5rem;
  }
`;
