import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
  scroll-behavior: smooth;
}
  * {
    margin: 0px;
    padding: 0rem;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
    

    &::-webkit-scrollbar {
      width: 10px;
      height: 8px;
    }
    &::-webkit-scrollbar-track {
      background-color: #F0EFEF;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #00A3FF;
      border-radius: 6px;
    }
  }

  
`;
