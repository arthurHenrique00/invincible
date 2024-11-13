import { styled } from 'styled-components'
import { colors } from '../../styles'

export const Cabecalho = styled.header`
  display: flex;
  background-color: ${colors.black};
  justify-content: space-between;
  align-items: center;
  font-family: Bebas Neue;
  padding: 22px;

  img {
    width: 370px;
    height: 180px;
  }

  ul {
    display: flex;

    li {
      margin-right: 12px;
      font-size: 16px;
      color: ${colors.yellow};
    }
  }
`
