import { useRouteLoaderData } from 'react-router-dom';
import { styled } from 'styled-components';
import type { IssueDetail } from 'types/issue';
import IssueInfo from 'components/issue/IssueInfo';
import UserAvatar from 'components/issue/UserAvatar';

const IssueDetailComponent = () => {
  const issueWithBody = useRouteLoaderData('number') as IssueDetail;

  return (
    <>
      <StyledDiv>
        <UserAvatar user={issueWithBody.user} />
        <IssueInfo issue={issueWithBody} />
      </StyledDiv>
      <div>{issueWithBody.body}</div>
    </>
  );
};

export default IssueDetailComponent;

const StyledDiv = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.4rem 2rem 1rem;
  padding: 0.8rem;
  color: black;
`;
