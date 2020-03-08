import styled from 'styled-components';
import { themeGet } from 'styled-system';

const JoinTrailArea = styled.div`
  width: 100%;
  padding: 325px 0;
  overflow: hidden;
  @media only screen and (max-width: 1366px) {
    padding: 60px 0;
  }
  @media only screen and (max-width: 667px) {
    padding: 45px 20px;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 460px;
  margin: 0 auto;
  text-align: center;

  img {
    display: inline-block;
    margin-bottom: 35px;
    @media only screen and (max-width: 667px) {
      margin-bottom: 27px;
      max-width: 50%;
    }
  }

  h2 {
    font-size: 6vh;
    line-height: 1.1em;
    font-weight: 500;
    letter-spacing: -1px;
    margin-bottom: 30px;
    color: #372e2c;
    @media only screen and (max-width: 1366px) {
      font-size: 32px;
      line-height: 40px;
      letter-spacing: -1px;
      margin-bottom: 20px;
    }
    @media only screen and (max-width: 667px) {
      font-size: 28px;
      line-height: 38px;
      letter-spacing: -0.5px;
      margin-bottom: 15px;
      padding: 0 15px;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.5em;
    color: rgba(55,46,44,0.8);
    @media only screen and (max-width: 667px) {
      line-height: 28px;
    }
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media only screen and (max-width: 1366px) {
    margin-top: 40px;
  }
  @media only screen and (max-width: 667px) {
    margin-top: 30px;
    flex-direction: column;
  }
  .reusecore__button {
    border-radius: 5px;
    text-transform: inherit;
    min-width: 250px;
    margin: 0 1vw;
    font-weight: 400;
    &:first-child {
      &:hover {
        background-color: ${themeGet('colors.primaryHover', '#3C74FF')};
      }
    }
    &:last-child {
      margin-right: 0;
      color: rgba(0,0,0,0.8);
      border: 1px solid rgba(0,0,0,0.8);
      padding: 0 1vw;
      &:hover{
        color: white;
        border: none;
      }
      @media only screen and (max-width: 667px) {
        margin-top: 2vh;
      }
    }
  }
`;

export default JoinTrailArea;
