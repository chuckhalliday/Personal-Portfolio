import styled, { ThemeProvider } from 'styled-components';

import theme from "../themes/default";
import GlobalStyles from './globals';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  margin: -8px;
  padding: 8px;
  overflow: hidden;
  background-color: #AEB0B0;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  animation: flash 1.5s infinite;

  @keyframes flash {
    0% { color: black; }
    50% { color: indigo; }
    100% { color: black; }
  }
`;

export const VideoStyled = styled.video`
  width: 103%;
  margin: -8px;
  object-fit: cover;
  border: none;
`;

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);
