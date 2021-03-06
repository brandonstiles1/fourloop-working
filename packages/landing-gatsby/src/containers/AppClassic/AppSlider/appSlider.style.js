import styled from 'styled-components';
import { themeGet } from 'styled-system';

import circleBg from 'common/src/assets/image/appClassic/circle-bg.svg';

const SectionWrapper = styled.div`
  padding: 75px 0;
  background-color: #fafafa;
  @media only screen and (max-width: 1366px) {
    padding: 60px 0;
  }
  @media only screen and (max-width: 667px) {
    padding: 45px 0;
  }
  > div.container {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const CarouseWrapper = styled.div`
  width: calc(100% - 428px);
  background-image: url(${circleBg});
  background-repeat: no-repeat;
  background-position: center center;
  @media only screen and (max-width: 1366px) {
    background-size: contain;
    align-self: center;
  }
  @media only screen and (max-width: 991px) {
    width: calc(100% - 350px);
  }
  @media only screen and (max-width: 667px) {
    width: 100%;
    align-self: flex-start;
  }
  .glide {
    width: 337px;
    margin: 0 auto;
    position: relative;
    @media only screen and (max-width: 991px) {
      width: 310px;
    }
    @media only screen and (max-width: 667px) {
      width: 260px;
    }
    .glide__slide {
      img {
        display: inline-block;
      }
    }
    .glide__bullets {
      display: flex;
      width: 4px;
      flex-direction: column;
      position: absolute;
      top: calc(50% - 50px);
      left: -21px;
      > button.glide__bullet {
        width: 4px;
        height: 20px;
        border-radius: 5px;
        margin-left: 0;
        margin-right: 0;
        background-color: #d8dce9;
        transition: height 0.3s ease;
        &.glide__bullet--active {
          height: 35px;
          background-color: #96a4c7;
        }
      }
    }
  }
`;

export const TextWrapper = styled.div`
  width: 428px;
  align-self: center;
  @media only screen and (max-width: 1366px) {
    padding-left: 30px;
  }
  @media only screen and (max-width: 991px) {
    width: 350px;
    padding-left: 20px;
  }
  @media only screen and (max-width: 667px) {
    width: 100%;
    padding-left: 0;
    margin-top: 40px;
  }
  h2 {
    color: #372e2c;
    font-size: 4.5vh;
    line-height: 1em;
    font-weight: 400;
    margin-bottom: 20px;
    @media only screen and (max-width: 1366px) {
      margin-bottom: 15px;
    }
    @media only screen and (max-width: 991px) {
      margin-bottom: 20px;
    }
  }
  p {
    color: rgba(55,46,44,0.6);
    font-weight: 300;
    font-size: 16px;
    line-height: 1.3em;
    margin-bottom: 0;
  }
  > p {
    margin-bottom: 40px;
  }
  .feature__block {
    margin-top: 30px;
    h3 {
      color: rgba(55,46,44,0.8);
      font-size: 18px;
      line-height: 28px;
      font-weight: 500;
      margin-bottom: 9px;
      @media only screen and (max-width: 1366px) {
        line-height: 26px;
        margin-bottom: 7px;
      }
    }
    i {
      color: rgba(255,0,0, 0.4);
      font-size: 30px;
      margin-right: 22px;
    }
  }
`;

export default SectionWrapper;
