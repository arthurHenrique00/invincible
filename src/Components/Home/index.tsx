import { useEffect } from 'react'
import {
  BestSellers,
  Enemies,
  EnemyGroup,
  Hero,
  Viltrum,
  Viltrumites
} from './style'
import Aos from 'aos'
import 'aos/dist/aos.css'

import mark_omni from '../../invincible_img/amazon_invincible-removebg.png'
import mark from '../../invincible_img/mark.jpg'
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
import viltrumites from '../../invincible_img/viltrumites_banner.png'
import GlobalStyle from '../../styles'
import lizard_league from '../../invincible_img/lizard-league.webp'
import empire_viltrum from '../../invincible_img/empire-viltrumite.webp'
import sequids from '../../invincible_img/sequids.jpg'
import queen_lizard from '../../invincible_img/Queen Lizard.jpeg'
import king_lizard from '../../invincible_img/King Lizard.jpeg'
import mauler from '../../invincible_img/mauler.jpg'
import machine_head from '../../invincible_img/machine_head.jpg'
import supreme_lizard from '../../invincible_img/supreme_lizard_ll.webp'
import doc_seismic from '../../invincible_img/doc_seismic.jpg'
import rus_livingston from '../../invincible_img/rus_livingston.webp'
import armstrong_levy from '../../invincible_img/amrstrong_levy.jpg'
import enemy from '../../invincible_img/enemies-banner.png'

import bs_1 from '../../invincible_img/best_seller_1.jpg'
import bs_2 from '../../invincible_img/best_seller_2.jpg'
import bs_3 from '../../invincible_img/best_seller_3.jpg'
import bs_4 from '../../invincible_img/best_seller_4.jpg'
import bs_5 from '../../invincible_img/best_seller_5.png'

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
          <img style={{ width: '630px', height: '320px' }} src={viltrumites} />
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
            <h2>Império de Viltrum</h2>
          </div>
          <div data-aos="fade-right">
            <img src={sequids} />
            <h2>Sequids</h2>
          </div>
        </div>
      </EnemyGroup>

      <Enemies>
        <h2 style={{ marginLeft: '220px' }}>Inimigos</h2>
        <div>
          <img
            style={{ width: '400px', height: '620px', margin: '0 120px' }}
            src={enemy}
          />
          <div className="enemies">
            <div className="char">
              <img src={armstrong_levy} />
              <div className="title">Armstrong Levy</div>
            </div>
            <div className="char">
              <img src={queen_lizard} />
              <div className="title">Rainha Lagarto</div>
            </div>
            <div className="char">
              <img src={king_lizard} />
              <div className="title">Rei Lagarto</div>
            </div>
            <div className="char">
              <img src={doc_seismic} />
              <div className="title">Dr. Seismic</div>
            </div>
            <div className="char">
              <img src={mauler} />
              <div className="title">Gêmeos Mauler</div>
            </div>
            <div className="char">
              <img src={supreme_lizard} />
              <div className="title">Lagarto Supremo</div>
            </div>
            <div className="char">
              <img src={machine_head} />
              <div className="title">Cabeça de Máquina</div>
            </div>
            <div className="char">
              <img src={rus_livingston} />
              <div className="title">Rus Livingston</div>
            </div>
          </div>
        </div>
        <img className="border" src={border_bottom} />
      </Enemies>

      <BestSellers>
        <img className="border" src={papper_bottom} />
        <h2 style={{ marginLeft: '220px' }}>Mais Vendidos</h2>
        <div>
          <div className="best-seller">
            <div data-aos="fade-right" className="comics">
              <p>Continue em Pé</p>
              <img src={bs_1} />
            </div>
            <div data-aos="fade-down" className="quantity">
              <div
                className="bar"
                style={{ width: '50px', height: '500px' }}
              ></div>
              <p>114,754 Cópias</p>
            </div>
          </div>
          <div className="best-seller">
            <div data-aos="fade-right" className="comics">
              <p>Amigos</p>
              <img src={bs_2} />
            </div>
            <div data-aos="fade-down" className="quantity">
              <div
                className="bar"
                style={{ width: '50px', height: '450px' }}
              ></div>
              <p>108,254 Cópias</p>
            </div>
          </div>
          <div className="best-seller">
            <div data-aos="fade-right" className="comics">
              <p>Dias Felizes</p>
              <img src={bs_3} />
            </div>
            <div data-aos="fade-down" className="quantity">
              <div
                className="bar"
                style={{ width: '50px', height: '350px' }}
              ></div>
              <p>97,714 Cópias</p>
            </div>
          </div>
          <div className="best-seller">
            <div data-aos="fade-right" className="comics">
              <p>A morte de todo o mundo</p>
              <img src={bs_4} />
            </div>
            <div data-aos="fade-down" className="quantity">
              <div
                className="bar"
                style={{ width: '50px', height: '290px' }}
              ></div>
              <p>89,546 Cópias</p>
            </div>
          </div>
          <div className="best-seller">
            <div data-aos="fade-right" className="comics">
              <p>Sequids</p>
              <img src={bs_5} />
            </div>
            <div data-aos="fade-down" className="quantity">
              <div
                className="bar"
                style={{ width: '50px', height: '250px' }}
              ></div>
              <p>76,231 Cópias</p>
            </div>
          </div>
        </div>
        <img className="border" src={border_bottom} />
      </BestSellers>
    </>
  )
}

export default Home
