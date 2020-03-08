import styled from 'styled-components';
import BannerBG from 'common/src/assets/image/appClassic/banner-texture.png';

export const BannerWrapper = styled.section`
  padding: 150px 0 50px 0;
  ${'' /* background-image: url(${BannerBG}), #fafafa; */}
  background: #fafafa;
  @media (max-width: 575px) {
    padding: 175px 0 0 0;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export const DiscountWrapper = styled.div`
  text-align: center;
`;

export const DiscountLabel = styled.div`
  font-family: 'Roboto', sans-serif;
  display: inline-block;
  border-radius: 4em;
  padding: 9px 22px;
  margin-bottom: 22px;
  background-color: rgba(236, 75, 80, 0.8);
  @media (max-width: 575px) {
    padding: 7px 10px;
  }
`;
