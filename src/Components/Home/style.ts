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
      padding: 3px 12px;
      font-family: Bebas Neue;
      text-decoration: none;
      color: white;
      border-radius: 22px 0;
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
  background-image: linear-gradient(${colors.blue}, #ecf0f1);

  .border {
    width: 100%;
    height: 50px;
  }

  .viltrum {
    padding: 60px;
    display: flex;
    width: 100%;

    div {
      margin-bottom: 32px;
      margin: 0 auto;

      img {
        width: 350px;
        height: 200px;
        margin-bottom: 22px;
      }

      h2 {
        margin-bottom: 12px;
        padding: 3px;
        color: black;
        background-color: white;
        font-size: 22px;
        font-family: Bebas Neue;
        display: none;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }

      &:before {
        content: '';
        position: absolute;
        top: -10px;
        left: -10px;
        width: 350px;
        height: 200px;
        background-color: ${colors.gray};
        background-image: radial-gradient(${colors.blue} 3px, transparent 5px);
        background-size: 20px 20px;
        z-index: -1;
        transition: all 0.3s ease;
      }

      &:hover:before {
        top: 10px;
        left: 10px;
      }

      &:hover {
        transform: scale(1.1, 1.1);
      }

      &:hover {
        h2 {
          position: absolute;
          display: block;
        }
      }
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
  background-image: linear-gradient(#ecf0f1, ${colors.blue});
  padding-top: 64px;

  h2 {
    font-family: Bebas Neue;
    font-size: 64px;
    color: transparent;
    -webkit-text-stroke: 1px black;
    margin-bottom: 64px;
  }

  .viltrumites {
    text-align: center;

    img {
      width: 300px;
    }
  }
`
