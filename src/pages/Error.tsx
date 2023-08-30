import { styled } from 'styled-components';

const Error = () => {
  return (
    <StyledDiv>
      <p>❌ Oops! ❌</p>
      <p>예상치 못한 문제가 발생했습니다</p>
      <p>오류 파악 및 해결을 위해 버그 제보 부탁드립니다</p>
    </StyledDiv>
  );
};

export default Error;

const StyledDiv = styled.div`
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  & > :first-child {
    font-size: 3.6rem;
  }
`;
