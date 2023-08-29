import { styled } from 'styled-components';
import type { Issue } from 'types/issue';
import { dateFormat } from 'utils/format';

interface Props {
  issue: Issue;
}

const IssueInfo = ({ issue }: Props) => {
  return (
    <>
      <StyledDetail>
        <p>{`#${issue.number} ${issue.title}`}</p>
        <p>{`작성자: ${issue.user.login}, 작성일 : ${dateFormat(issue.created_at)}`}</p>
      </StyledDetail>
      <StyledComments>{`코멘트: ${issue.comments}`}</StyledComments>
    </>
  );
};

export default IssueInfo;

const StyledDetail = styled.div`
  flex-grow: 1;
  padding: 0.4rem 0.8rem;
  border-bottom: 1px solid black;
  & > p {
    margin: 0.4rem;
  }
  & > :first-child {
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const StyledComments = styled.div`
  flex: 0 0 6rem;
  display: inline-block;
  border-bottom: 1px solid black;
  align-self: stretch;
  display: flex;
  align-items: center;
`;
