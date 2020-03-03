import React from 'react';
import { Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/src/theme/appclassic';
import { ResetCSS } from 'common/src/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from '../containers/AppClassic/Navbar';
import CaseStudyBanner from '../containers/AppClassic/CaseStudyBanner';
import VisitorSection from '../containers/AppClassic/VisitorSection';
import TestimonialSection from '../containers/AppClassic/TestimonialSection';
import FeatureSlider from '../containers/AppClassic/FeatureSlider';
import JoinTrail from '../containers/AppClassic/JoinTrail';
import Footer from '../containers/AppClassic/Footer';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from '../containers/AppClassic/appClassic.style';

import SEO from '../components/seo';

const SecondPage = () => (
  <ThemeProvider theme={theme}>
    <>
      <SEO title="Fourloop.ai" />
      <ResetCSS />
      <GlobalStyle />

      <AppWrapper>
        <Sticky top={0} innerZ={9999} activeClass="sticky-active">
          <Navbar />
        </Sticky>
        <ContentWrapper>
          <CaseStudyBanner />
          <VisitorSection />
          <FeatureSlider />
          <TestimonialSection />
          <JoinTrail />
        </ContentWrapper>
        <Footer />
      </AppWrapper>
    </>
  </ThemeProvider>
);

export default SecondPage;
