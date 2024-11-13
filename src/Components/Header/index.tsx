import { Cabecalho } from './style'
import invicible from '../../invincible_img/logo.png'

const Header = () => (
  <Cabecalho>
    <img src={invicible} />
    <nav>
      <ul>
        <li>Home</li>
        <li>Viltrumitas</li>
        <li>Inimigos</li>
        <li>Mais Vendidos</li>
        <li>Melhores Momentos</li>
      </ul>
    </nav>
  </Cabecalho>
)

export default Header
