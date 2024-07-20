import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    min-height: 100vh;
    @supports (-webkit-appearance:none) and (stroke-color: transparent) {
      min-height: -webkit-fill-available;
    }
    -ms-overflow-style: none;  /* 인터넷 익스플로러 */
    scrollbar-width: none;     /* 파이어폭스 */
    ::-webkit-scrollbar {
    display: none;
  }
  }

  * {
    box-sizing: border-box;
  }


  .scroll {
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }

  .scroll::-webkit-scrollbar {
    display: none;
  }

  a {

  text-decoration: none;

  color: #222;

}

`;
