import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  black: '#000',
  red: '#c0392b',
  yellow: '#fffa65',
  blue: '#24B4FF',
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

      overflow-x: hidden;
    }

      .border {
    width: 100%;
    height: 50px;
  }
`
export default GlobalStyle

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`
