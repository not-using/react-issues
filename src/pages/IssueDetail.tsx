import { useRouteLoaderData, Link } from 'react-router-dom';
import { styled } from 'styled-components';
import type { IssueDetail } from 'types/issue';
import IssueBody from 'components/issue/IssueBody';
import IssueInfo from 'components/issue/IssueInfo';
import UserAvatar from 'components/issue/UserAvatar';
import { OWNER, REPOSITORY } from 'configs/octokit';

const IssueDetailComponent = () => {
  const issueWithBody = useRouteLoaderData('number') as IssueDetail;
  const issueLink = `https://github.com/${OWNER}/${REPOSITORY}/issues/${issueWithBody.number}`;

  return (
    <>
      <StyledDiv>
        <UserAvatar user={issueWithBody.user} />
        <IssueInfo issue={issueWithBody} />
      </StyledDiv>
      <Link to={issueLink}>Go to Issue</Link>
      <IssueBody body={issueWithBody.body} />
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
