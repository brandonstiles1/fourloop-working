import React from 'react';
import { Link } from 'gatsby';
import { Fade } from 'react-reveal';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/src/theme/appclassic';
import { ResetCSS } from 'common/src/assets/css/style';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Sticky from 'react-stickynode';
import Navbar from '../containers/AppClassic/Navbar';
import ContactForm from '../containers/AppClassic/ContactForm';
import Footer from '../containers/AppClassic/Footer';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
  SuccessPage,
} from '../containers/AppClassic/appClassic.style';

import SEO from '../components/seo';


const Success = ({ title, buttonStyling, linkAlign }) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO title="Contact" />
      <ResetCSS />
      <GlobalStyle />

      <AppWrapper style={{background: '#a2adb7'}}>
        <Sticky top={0} innerZ={9999} activeClass="sticky-active">
          <Navbar />
        </Sticky>
        <ContentWrapper>
        <SuccessPage>
          <Fade cascade up>
            <Heading as='h2' {...title} content="Thanks for reaching out! We'll get back to you ASAP" />
            <Link to='/case-study' {...linkAlign}>
              <Button {...buttonStyling} title='See a case study'/>
            </Link>
          </Fade>
        </SuccessPage>
        </ContentWrapper>
        <Footer />
      </AppWrapper>
    </>
  </ThemeProvider>
);

Success.defaultProps = {
  title: {
    color: "white",
    fontWeight: '500',
    pt: '30vh',
    textAlign: 'center',
    lineHeight: '1.3em',
    maxWidth: '600px',
  },
  buttonStyling: {
    borderRadius: '5px',
    textAlign: 'center',
    m: 'auto',
    mt: '5vh',
  }
}

export default Success;