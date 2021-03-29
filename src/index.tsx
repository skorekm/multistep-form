import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from './Form';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import './index.css';

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.palette.background.default};
  color: #fff;
  position: relative;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Form />
      </Main>
    </ThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
