import { styled } from 'styled-components';
import type { User } from 'types/user';

interface Props {
  user: User;
}

const UserAvatar = ({ user }: Props) => {
  return (
    <StyledWrapper>
      <img src={user.avatar_url} alt={user.login} />
    </StyledWrapper>
  );
};

export default UserAvatar;

const StyledWrapper = styled.div`
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  overflow: hidden;
  margin: 0 1rem;
  flex: 0 0 4rem;
  & > img {
    width: 100%;
    height: 100%;
  }
`;
