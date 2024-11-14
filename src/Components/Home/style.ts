import styled from 'styled-components'
import { colors } from '../../styles'
import bannerHero from '../../invincible_img/black_hole.gif'

export const Hero = styled.div`
  background-image: url(${bannerHero});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;

  > img {
    width: 600px;
    height: 600px;
  }

  .logos {
    position: absolute;
    margin-left: 300px;
    margin-top: 500px;

    > img {
      width: 150px;
    }
  }

  .release {
    margin-left: auto;

    a {
      position: absolute;
      background-color: ${colors.blue};
      padding: 12px;
      font-family: Bebas Neue;
      text-decoration: none;
      color: white;
      border-radius: 22px;
      font-size: 16px;
      right: 14%;
      margin-top: 32px;
    }

    img {
      width: 450px;
      height: 600px;
    }
  }
`

export const Viltrum = styled.section`
  background-image: linear-gradient(${colors.blue}, ${colors.yellow});

  .border {
    width: 100%;
    height: 50px;
  }

  .viltrum {
    padding: 60px;

    img {
      display: block;
      width: 450px;
      height: 250px;
      margin: 0 auto;
      margin-bottom: 32px;
    }
  }

  .title-card {
    text-align: center;
    margin-top: 32px;

    img {
      width: 250px;
      height: 15s0px;
    }
  }
`

export const Viltrumites = styled.section`
  background-image: linear-gradient(${colors.yellow}, ${colors.blue});

  img {
    width: 300px;
  }
`
