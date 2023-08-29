import { Link } from 'react-router-dom';
import { SPONSERS } from 'configs/advertisement';
import { styled } from 'styled-components';

interface Props {
  index: number;
}
const Advertisement = ({ index }: Props) => {
  const sponser = SPONSERS[index % SPONSERS.length];
  return (
    <StyledLink to={sponser.url}>
      <img src={sponser.img} alt={sponser.alt} />
    </StyledLink>
  );
};

export default Advertisement;

const StyledLink = styled(Link)`
  display: block;
  text-align: center;
  height: 8rem;
  & > img {
    height: 100%;
  }
`;
