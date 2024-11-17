import { useEffect } from 'react'
import { EnemyGroup, Hero, Viltrum, Viltrumites } from './style'
import Aos from 'aos'
import 'aos/dist/aos.css'

import mark_omni from '../../invincible_img/amazon_invincible-removebg.png'
import mark from '../../invincible_img/mark.jpeg'
import nolan from '../../invincible_img/omni-man_vil.jpeg'
import conquest from '../../invincible_img/conquest_vil.jpg'
import thragg from '../../invincible_img/thragg_vil.jpeg'
import craig from '../../invincible_img/craig_vil.jpeg'
import thaedus from '../../invincible_img/thaedus_vil.jpg'
import oliver from '../../invincible_img/oliv_vil.jpeg'
import anissa from '../../invincible_img/anissa_vilt.jpeg'
import invincible_amazon from '../../invincible_img/invincible_amazon.png'
import studio from '../../invincible_img/wind_sun_sky.png'
import release from '../../invincible_img/release_season.png'
import viltrum1 from '../../invincible_img/viltrum_1.webp'
import viltrum2 from '../../invincible_img/viltrum_2.webp'
import viltrum3 from '../../invincible_img/viltrum_civilization.png'
import title_card_pattern from '../../invincible_img/title_card_pattern1.png'
import title_card_black from '../../invincible_img/invincible_black_card.png'
import border_bottom from '../../invincible_img/border-papper-bottom.png'
import papper_bottom from '../../invincible_img/border-papper.png'
import viltrumites from '../../invincible_img/invincibbl12.png'
import GlobalStyle from '../../styles'
import lizard_league from '../../invincible_img/lizard-league.webp'
import empire_viltrum from '../../invincible_img/empire-viltrumite.webp'
import sequids from '../../invincible_img/sequids.jpg'

const Home = () => {
  useEffect(() => {
    Aos.init()
  }, [])

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
        <img className="border" src={border_bottom} />
      </Viltrum>

      <Viltrumites id="viltr">
        <h2 style={{ marginLeft: '220px' }}>Viltrumitas</h2>
        <div>
          <img style={{ width: '650px', height: '450px' }} src={viltrumites} />
          <div className="viltrumites">
            <div className="char">
              <img src={mark} />
              <div className="title">Mark Grayson</div>
            </div>
            <div className="char">
              <img src={nolan} />
              <div className="title">Nolan Grayson</div>
            </div>
            <div className="char">
              <img src={oliver} />
              <div className="title">Oliver Grayson</div>
            </div>
            <div className="char">
              <img src={conquest} />
              <div className="title">Conquistador</div>
            </div>
            <div className="char">
              <img src={thragg} />
              <div className="title">Thragg</div>
            </div>
            <div className="char">
              <img src={anissa} />
              <div className="title">Anissa</div>
            </div>
            <div className="char">
              <img src={thaedus} />
              <div className="title">Thaedus</div>
            </div>
            <div className="char">
              <img src={craig} />
              <div className="title">Craig</div>
            </div>
          </div>
        </div>
      </Viltrumites>

      <EnemyGroup>
        <img className="border" src={papper_bottom} />
        <div className="title-card">
          <img src={title_card_black} />
        </div>
        <div className="enemies-group">
          <div data-aos="fade-left">
            <img src={lizard_league} />
            <h2>Esquadrão Lagarto</h2>
          </div>
          <div data-aos="fade-down">
            <img src={empire_viltrum} />
            <h2>Empério de Viltrum</h2>
          </div>
          <div data-aos="fade-right">
            <img src={sequids} />
            <h2>Sequids</h2>
          </div>
        </div>
      </EnemyGroup>
    </>
  )
}

export default Home
