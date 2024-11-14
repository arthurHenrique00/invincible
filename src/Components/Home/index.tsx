import { useEffect, useState } from 'react'
import { Hero, Viltrum, Viltrumites } from './style'
import Aos from 'aos'
import 'aos/dist/aos.css'

import mark_omni from '../../invincible_img/amazon_invincible-removebg.png'
import invincible_amazon from '../../invincible_img/invincible_amazon.png'
import studio from '../../invincible_img/wind_sun_sky.png'
import release from '../../invincible_img/release_season.png'
import viltrum1 from '../../invincible_img/viltrum_1.webp'
import viltrum2 from '../../invincible_img/viltrum_2.webp'
import viltrum3 from '../../invincible_img/viltrum_civilization.png'
import title_card_pattern from '../../invincible_img/title_card_pattern1.png'
import title_card_black_1 from '../../invincible_img/title_card_pattern1.png'
import papper_bottom from '../../invincible_img/border-papper.png'
import GlobalStyle from '../../styles'

const Home = () => {
  useEffect(() => {
    Aos.init()
  }, [])

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
          <a
            target="_blank"
            href="https://www.primevideo.com/dp/amzn1.dv.gti.1820eb17-69ad-49af-be0f-204585939772?autoplay=0&ref_=atv_cf_strg_wb"
            rel="noreferrer"
          >
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
          <div data-aos="fade-left">
            <img src={viltrum1} />
            <h2>Planeta Viltrum</h2>
          </div>
          <div data-aos="fade-down">
            <img src={viltrum2} />
            <h2>Cidade de Viltrum</h2>
          </div>
          <div data-aos="fade-right">
            <img src={viltrum3} />
            <h2>Civilização</h2>
          </div>
        </div>
      </Viltrum>
      <Viltrumites id="viltr">
        <h2 style={{ marginLeft: '220px' }}>Viltrumitas</h2>
        <div className="viltrumites">
          <img src={viltrum1} />
        </div>
      </Viltrumites>
    </>
  )
}

export default Home
