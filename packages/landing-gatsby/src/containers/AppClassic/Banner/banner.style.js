import styled from 'styled-components';
import { themeGet } from 'styled-system';

const BannerWrapper = styled.div`
  padding-top: 75px;
  min-height: 802px;
  background-color: #a2adb7;
  overflow: hidden;
  @media only screen and (min-width: 1201px) and (max-width: 1440px) {
    min-height: 100vh;
  }
  @media only screen and (max-width: 480px) {
    padding-top: 120px;
  }
  > div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: calc(802px - 100px);
    @media only screen and (min-width: 1201px) and (max-width: 1440px) {
      min-height: calc(100vh - 100px);
    }
    @media only screen and (max-width: 480px) {
      flex-wrap: wrap;
    }
  }
`;

export const BannerContent = styled.div`
  max-width: 525px;
  width: 100%;
  @media only screen and (max-width: 991px) {
    flex-shrink: 0;
    max-width: 360px;
  }

  h1 {
    font-size: 6vh;
    line-height: 1.1em;
    font-weight: 400;
    color: white;
    margin-bottom: 24px;
    @media only screen and (max-width: 1366px) {
      font-size: 32px;
      line-height: 42px;
      margin-bottom: 20px;
    }
  }

  p {
    color: white;
    font-size: 16px;
    line-height: 29px;
  }
`;

export const RatingInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 22px;
  color: ${themeGet('colors.menu', '#0D233E')};

  .rating {
    margin-right: 10px;
    .star {
      color: ${themeGet('colors.yellow', '#FFA740')};
    }
    .star-o {
      color: #e8e8e8;
    }
  }

  img {
    margin-left: 9px;
  }
`;

export const BannerImage = styled.div`
  flex-shrink: 0;
  align-self: flex-end;
  @media only screen and (max-width: 480px) {
    margin-top: 40px;
    img {
      max-width: 70%;
    }
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 35px;

  .reusecore__button {
    text-transform: inherit;
    border-radius: 5px;
    padding-left: 16px;
    padding-right: 16px;

    &.primary {
      &:hover {
        background-color: ${themeGet('colors.primaryHover', '#3C74FF')};
      }
    }

    &.text {
      color: rgba(255,255,255,.8);
      .btn-icon {
        svg {
          width: auto;
          height: 25px;
        }
      }
      &:hover {
        color: white;
      }
    }
  }
`;

export default BannerWrapper;
