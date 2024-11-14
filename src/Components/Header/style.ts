import { styled } from 'styled-components'
import { colors } from '../../styles'

export const Cabecalho = styled.header`
  display: flex;
  background-color: ${colors.black};
  justify-content: space-between;
  align-items: center;
  padding: 22px;

  img {
    width: 100px;
    height: 50px;
    margin-left: 32px;
  }

  ul {
    display: flex;
    list-style: none;

    li {
      margin-right: 22px;
      font-size: 16px;

      a {
        text-decoration: none;
        color: ${colors.blue};
        font-family: Bebas Neue;
        font-size: 18px;
      }
    }
  }
`
