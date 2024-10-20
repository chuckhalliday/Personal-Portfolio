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
  animation: flash 2s infinite;

  @keyframes flash {
    0% { color: black; }
    50% { color: red; }
    100% { color: black; }
  }
`;

export const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  color: purple;
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
