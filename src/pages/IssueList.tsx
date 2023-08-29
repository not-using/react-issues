import { useRef, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { styled } from 'styled-components';
import type { Issue } from 'types/issue';
import IssueInfo from 'components/issue/IssueInfo';
import InfinityIssues from 'components/issue/InfinityIssues';

const IssueList = () => {
  const [issues, setIssues] = useState<Issue[]>(useLoaderData() as Issue[]);
  const page = useRef(1);

  const addIssues = (newIssues: Issue[]) => {
    setIssues([...issues, ...newIssues]);
  };

  return (
    <Wrapper>
      {issues.map((issue) => (
        <StyledLink key={issue.id} to={`${issue.number}`}>
          <IssueInfo issue={issue} />
        </StyledLink>
      ))}
      <InfinityIssues page={page} addIssues={addIssues} />
    </Wrapper>
  );
};

export default IssueList;

const Wrapper = styled.div`
  width: 90%;
  min-height: 90vh;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.4rem 2rem 1rem;
  padding: 0.8rem;
  text-decoration: none;
  color: black;
  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease-in-out;
  }
`;
