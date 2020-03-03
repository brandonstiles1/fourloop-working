import styled from 'styled-components';
import { themeGet } from 'styled-system';

const ContactFormStyling = styled.section`
  color: white;
  label, p {
    color: rgba(255,255,255,0.8);
    font-weight: 400;
    font-size: 18px;
  }
  p {
    margin-bottom: 0;
  }
  input,
  textarea {
    background: transparent;
    border: 1px solid white;
  }
  input::placeholder {
    color: white;
  }
  textarea {
    min-height: 25vh;
  }
  button {
    display: flex;
    justify-content: center;
    margin: auto;
    border-radius: 5px;
    width: 100%;
    background: white;
    color: #EC4B50;
    box-shadow: 0 0 20px rgba(255,255,255,0.5);
    margin-top: 3vh;
  }
`;

export default ContactFormStyling;
