import { MutableRefObject, useRef } from 'react';
import { styled } from 'styled-components';
import { getIssueListApi } from 'apis/getIssueList';
import { useObserver } from 'hooks/useObserver';
import type { Issue } from 'types/issue';
import SpinnerBubble from 'components/commons/SpinnerBubble';

interface Props {
  page: MutableRefObject<number>;
  addIssues: (newIssues: Issue[]) => void;
}

const InfinityIssues = ({ page, addIssues }: Props) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const getMoreIssues = async () => {
    const nextPage = page.current + 1;
    
    await getIssueListApi(nextPage).then((response) => {
      page.current = nextPage;
      addIssues(response);
    });
  };

  useObserver(targetRef, getMoreIssues);

  return (
    <StyledDiv ref={targetRef}>
      <SpinnerBubble />
    </StyledDiv>
  );
};

export default InfinityIssues;

const StyledDiv = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  justify-content: center;
`;
