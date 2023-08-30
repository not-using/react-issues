import { styled } from 'styled-components';

const NotFound = () => {
  return (
    <StyledDiv>
      <p>⚠️ NotFound ⚠️</p>
      <p>페이지 주소를 다시 확인해주세요</p>
    </StyledDiv>
  );
};

export default NotFound;

const StyledDiv = styled.div`
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3.6rem;
  font-weight: bold;
  & > :last-child {
    font-size: 2rem;
  }
`;
