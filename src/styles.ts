import { createGlobalStyle } from 'styled-components'

export const colors = {
  black: '#000',
  red: '#c0392b',
  yellow: '#fffa65',
  blue: '#25CCF7',
  gray: '#bdc3c7'
}

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding:0;
      box-sizing: border-box;
      font-family: Roboto, sans-serif;
    }

    body {
      background-color: ;
      color:;
    }
`
export default GlobalStyle
