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
  width: 100%;
  justify-content: center;
  text-align: center;
  position: fixed;
  top: 10%;
  animation: flash 2s infinite;

  @keyframes flash {
    0% { color: black; }
    50% { color: red; }
    100% { color: black; }
  }
`;

export const SubTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
  position: fixed;
  bottom: 0;
  color: purple;
`;

export const VideoStyled = styled.video`
  display: flex;
  align-items: center;
  max-height: 60%;
  position: relative;
  top: 50%;  // Position it halfway down the page
  transform: translateY(-50%);
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
