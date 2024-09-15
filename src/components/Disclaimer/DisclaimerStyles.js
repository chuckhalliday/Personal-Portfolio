import styled, {keyframes} from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

const zoomAnimation = keyframes` // Define a keyframes animation
  from {
    transform: scale(1.3);
  }
  to {
    transform: scale(8) translateY(4%);
  }
`;

export const ZoomImage = styled.img`
  height: 100%;
  animation: ${zoomAnimation} 4s ease-in-out infinite;
`;