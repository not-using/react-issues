import { Fragment, useRef, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { styled } from 'styled-components';
import type { Issue } from 'types/issue';
import IssueInfo from 'components/issue/IssueInfo';
import InfinityIssues from 'components/issue/InfinityIssues';
import Advertisement from 'components/commons/Advertisement';
import { ITEM_PER_ADS } from 'configs/advertisement';

const IssueList = () => {
  const [issues, setIssues] = useState<Issue[]>(useLoaderData() as Issue[]);
  const page = useRef(1);

  const addIssues = (newIssues: Issue[]) => {
    setIssues([...issues, ...newIssues]);
  };

  return (
    <Wrapper>
      {issues.map((issue, index) => (
        <Fragment key={issue.number}>
          <StyledLink to={`${issue.number}`}>
            <IssueInfo issue={issue} />
          </StyledLink>
          {(index + 1) % ITEM_PER_ADS === 0 ? (
            <Advertisement index={Math.ceil(index / ITEM_PER_ADS)} />
          ) : null}
        </Fragment>
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
