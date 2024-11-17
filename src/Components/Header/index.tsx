import { Cabecalho } from './style'
import invicible from '../../invincible_img/logo.png'

const Header = () => (
  <Cabecalho>
    <img src={invicible} />
    <nav>
      <ul>
        <li>
          <a href="#viltr">Viltrumitas</a>
        </li>
        <li>
          <a href="#enemies">Inimigos</a>
        </li>
        <li>
          <a href="#bestsell">Mais Vendidos</a>
        </li>
      </ul>
    </nav>
  </Cabecalho>
)

export default Header
