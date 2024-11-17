import styled from 'styled-components'
import { colors } from '../../styles'

export const SiteFooter = styled.footer`
  background-color: #636e72;
  padding: 16px;
  text-align: center;

  p {
    font-size: 16px;
    color: ${colors.gray};
    font-family: Bebas Neue;
    padding-bottom: 12px;
  }

  ul {
    display: flex;
    margin-left: 26px;

    li {
      margin-right: 16px;
      list-style: none;

      a {
        font-size: 16px;
        color: ${colors.gray};
        text-decoration: none;
        font-family: Bebas Neue;
      }
    }
  }
`
