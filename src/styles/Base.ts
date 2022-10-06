import styled, { createGlobalStyle } from 'styled-components';

const StyleResets = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
  }
`;

export const AppWrapper = styled.div`
    /* background-color: red; */

    height: 100%;
`;

export { StyleResets };

