import styled from 'styled-components'
import { colors } from '../../styles'
import bgSpace from '../../invincible_img/spaceBG.gif'
import bannerHero from '../../invincible_img/black_hole.gif'
import comics from '../../invincible_img/bg_comics.jpg'

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

  .viltrum {
    padding: 60px;
    display: flex;
    width: 100%;

    div {
      margin-bottom: 32px;
      margin: 0 auto;
      position: relative;

      img {
        width: 350px;
        height: 200px;
        margin-bottom: 22px;
        position: relative;
        z-index: 2;
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
        z-index: 3;
      }

      &:before {
        content: '';
        position: absolute;
        top: -20px;
        left: -20px;
        width: 350px;
        height: 200px;
        background-color: ${colors.gray};
        background-image: radial-gradient(${colors.blue} 3px, transparent 3px);
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
      height: 150px;
    }
  }
`

export const Viltrumites = styled.section`
  background-image: url(${bgSpace});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 64px;

  h2 {
    font-family: Bebas Neue;
    font-size: 64px;
    color: transparent;
    -webkit-text-stroke: 1px white;
    margin-bottom: 64px;
  }

  div {
    display: flex;
    align-items: center;

    .viltrumites {
      text-align: center;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .viltrumites {
      text-align: center;
      display: grid;
      grid-template-columns: 150px 150px 150px 150px;
      gap: 60px;

      .char {
        width: 300px;
        padding-bottom: 100px;
        display: flex;
        flex-direction: column;

        img {
          filter: grayscale();
          width: 150px;
          height: 150px;
          border-radius: 50%;
          transition: filter 0.4s ease-in-out;

          &:hover {
            filter: none;
          }
        }

        .title {
          font-family: Bebas Neue;
          font-size: 22px;
          margin-top: 16px;
          color: white;
          text-align: center;
        }
      }
    }
  }
`
export const EnemyGroup = styled.section`
  background-image: linear-gradient(${colors.black}, ${colors.red});

  .enemies-group {
    padding: 60px;
    display: flex;
    width: 100%;

    div {
      margin-bottom: 32px;
      margin: 0 auto;
      position: relative;

      img {
        width: 350px;
        height: 200px;
        margin-bottom: 22px;
        position: relative;
        z-index: 2;
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
        z-index: 3;
      }

      &:before {
        content: '';
        position: absolute;
        top: -20px;
        left: -20px;
        width: 350px;
        height: 200px;
        background-color: ${colors.black};
        background-image: radial-gradient(${colors.red} 3px, transparent 3px);
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
      height: 150px;
    }
  }
`

export const Enemies = styled.section`
  background-image: linear-gradient(${colors.red}, ${colors.black});

  h2 {
    font-family: Bebas Neue;
    font-size: 64px;
    color: transparent;
    -webkit-text-stroke: 1px ${colors.black};
    margin-bottom: 64px;
  }

  div {
    display: flex;
    align-items: center;

    .enemies {
      text-align: center;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .enemies {
      text-align: center;
      display: grid;
      grid-template-columns: 150px 150px 150px 150px;
      gap: 60px;

      .char {
        width: 300px;
        padding-bottom: 100px;
        display: flex;
        flex-direction: column;

        img {
          filter: grayscale();
          width: 150px;
          height: 150px;
          border-radius: 50%;
          transition: filter 0.4s ease-in-out;

          &:hover {
            filter: none;
          }
        }

        .title {
          font-family: Bebas Neue;
          font-size: 22px;
          margin-top: 16px;
          color: white;
          text-align: center;
        }
      }
    }
  }
`

export const BestSellers = styled.section`
  background-image: url(${comics});

  h2 {
    font-family: Bebas Neue;
    font-size: 64px;
    color: transparent;
    -webkit-text-stroke: 1px white;
    margin-top: 22px;
  }

  > div {
    display: flex;
    padding: 180px 0;
    margin-left: 25px;

    .best-seller {
      display: flex;
      margin-top: auto;

      .comics {
        margin-top: auto;
        display: block;

        img {
          width: 150px;
          height: 200px;
          margin: 26px;
          border-radius: 3px;

          &:hover {
            transform: scale(1.2, 1.2);
            transition: all 0.3s ease;
          }
        }

        p {
          color: white;
          font-family: Bebas Neue;
          text-align: center;
        }
      }

      .quantity {
        display: block;

        .bar {
          background-color: ${colors.gray};
          margin-right: 60px;
          padding: 7px;
        }

        p {
          margin-top: 12px;
          color: white;
          font-family: Bebas Neue;
        }
      }
    }
  }
`
