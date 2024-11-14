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
          <a href="#">Inimigos</a>
        </li>
        <li>
          <a href="#">Mais Vendidos</a>
        </li>
        <li>
          <a href="#">Melhores Momentos</a>
        </li>
      </ul>
    </nav>
  </Cabecalho>
)

export default Header
