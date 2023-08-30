import { styled } from 'styled-components';

interface Props {
  body: string;
}

const IssueBody = ({ body }: Props) => {
  return <StyledWrapper dangerouslySetInnerHTML={{ __html: body }} />;
};

export default IssueBody;

const StyledWrapper = styled.div`
  margin: 0.4rem 2rem 1rem;
  padding: 0.8rem;
  width: 70%;
  & {
    white-space: pre-wrap;
  }
`;
