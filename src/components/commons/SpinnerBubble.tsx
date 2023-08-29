import { styled } from 'styled-components';

const SpinnerBubble = styled.span`
  display: inline-block;
  color: gray;
  opacity: 0.6;
  position: relative;
  font-size: 0.7rem;

  &,
  &:before,
  &:after {
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    animation: bubble 1s infinite ease-in-out;
  }

  &:before,
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
  }

  &:before {
    animation-delay: 1.8s;
    left: -4rem;
  }

  &:after {
    animation-delay: 1.2s;
    left: 4rem;
  }

  @keyframes bubble {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5rem 0 -1.3rem;
    }
    40% {
      box-shadow: 0 2.5rem 0 0;
    }
  }
`;

export default SpinnerBubble;
