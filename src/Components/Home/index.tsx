import mark_omni from '../../invincible_img/amazon_invincible-removebg.png'
import invincible_amazon from '../../invincible_img/invincible_amazon.png'
import studio from '../../invincible_img/wind_sun_sky.png'
import release from '../../invincible_img/release_season.png'
import viltrum1 from '../../invincible_img/viltrum_1.webp'
import viltrum2 from '../../invincible_img/viltrum_2.webp'
import viltrum3 from '../../invincible_img/viltrum_3.webp'
import title_card_pattern from '../../invincible_img/title_card_pattern1.png'
import title_card_black_1 from '../../invincible_img/title_card_pattern1.png'
import papper_bottom from '../../invincible_img/border-papper.png'
import GlobalStyle from '../../styles'

import { Hero, Viltrum, Viltrumites } from './style'
import { useState } from 'react'

const Home = () => {
  const [card, setCard] = useState(title_card_black_1)

  return (
    <>
      <GlobalStyle />
      <Hero>
        <img src={mark_omni} />
        <div className="logos">
          <img src={invincible_amazon} />
          <img src={studio} />
        </div>
        <div className="release">
          <a href="https://www.primevideo.com/dp/amzn1.dv.gti.1820eb17-69ad-49af-be0f-204585939772?autoplay=0&ref_=atv_cf_strg_wb">
            Assistir
          </a>
          <img src={release} />
        </div>
      </Hero>
      <Viltrum>
        <img className="border" src={papper_bottom} />
        <div className="title-card">
          <img style={{ marginBottom: '64px' }} src={title_card_pattern} />
        </div>
        <div className="viltrum">
          <img style={{ marginLeft: '300px' }} src={viltrum1} />
          <img style={{ marginRight: '200px' }} src={viltrum2} />
          <img style={{ marginLeft: '300px' }} src={viltrum3} />
        </div>
      </Viltrum>
      <Viltrumites>
        <img src={viltrum1} />
      </Viltrumites>
    </>
  )
}

export default Home
