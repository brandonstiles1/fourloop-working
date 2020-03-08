import styled from 'styled-components';
import { themeGet } from 'styled-system';

const ContactFormStyling = styled.section`
  color: #372e2c;
  label, p {
    color: rgba(55,46,44,0.8);
    font-weight: 400;
    font-size: 18px;
  }
  p {
    margin-bottom: 0;
  }
  input,
  textarea {
    background: transparent;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid rgba(55,46,44,0.4);
    &:focus {
      background: transparent;
      box-shadow: 0px 0px 20px rgba(255,255,255,0.9);
      border: 1px solid #00bb00;
      border-radius: 5px;
    }
  }
  input::placeholder {
    color: white;
  }
  textarea {
    min-height: 25vh;
    border: 1px solid rgba(55,46,44,0.4);
  }
  button {
    display: flex;
    justify-content: center;
    margin: auto;
    border-radius: 5px;
    width: 100%;
    background: #EC4B50;
    color: white;
    font-weight: 400;
    box-shadow: 0 0 20px rgba(255,255,255,0.3);
    margin-top: 3vh;
  }
`;

export default ContactFormStyling;
