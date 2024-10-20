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

export const VideoStyled = styled.video`
  width: 100%;
  object-fit: cover;
  border: none;
`;

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);
