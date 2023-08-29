import { styled } from 'styled-components';
import { OWNER, REPOSITORY } from 'configs/octokit';
import { capitalize } from 'utils/format';

const Header = () => {
  return (
    <HeaderCenter>
      <StyledSpan>{capitalize(OWNER)}</StyledSpan>
      <StyledSpan>{capitalize(REPOSITORY)}</StyledSpan>
    </HeaderCenter>
  );
};

export default Header;

const HeaderCenter = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  background-color: white;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  flex-direction: row;
  position: sticky;
  top: 0;
`;

const StyledSpan = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  &:first-of-type:after {
    content: '/';
    margin: 0 0.5rem;
  }
`;
