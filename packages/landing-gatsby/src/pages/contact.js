import React from 'react';
import { Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/src/theme/appclassic';
import { ResetCSS } from 'common/src/assets/css/style';
import Heading from 'common/src/components/Heading';
import Box from 'common/src/components/Box';
import Sticky from 'react-stickynode';
import Navbar from '../containers/AppClassic/Navbar';
import ContactForm from '../containers/AppClassic/ContactForm';
import Footer from '../containers/AppClassic/Footer';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from '../containers/AppClassic/appClassic.style';

import SEO from '../components/seo';

const Contact = ({ 
  contentContainer,
  heading,
  contactForm,
 }) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO title="Contact" />
      <ResetCSS />
      <GlobalStyle />

      <AppWrapper style={{background: '#fafafa'}}>
        <Sticky top={0} innerZ={9999} activeClass="sticky-active">
          <Navbar />
        </Sticky>
        <ContentWrapper>
          <Box {...contentContainer}>
            <Heading {...heading} content='Get Started Today' style={{ paddingTop: '20vh' }} />
            <ContactForm {...contactForm} />
          </Box>
        </ContentWrapper>
        <Footer />
      </AppWrapper>
    </>
  </ThemeProvider>
);

Contact.defaultProps = {
  contentContainer: {
    width: '85vw',
    margin: 'auto',
    maxWidth: '600px',
    height: '120vh',
  },
  heading: {
    fontWeight: '400',
    mb: '5vh',
    color: '#372e2c',
    fontSize: '4.5vh',
  },
}

export default Contact;