import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/src/theme/appclassic';
import { ResetCSS } from 'common/src/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from '../containers/AppClassic/Navbar';
import CaseStudyBanner from '../containers/AppClassic/CaseStudyBanner';
import CaseStudy_VisitorSection from '../containers/AppClassic/CaseStudy_VisitorSection';
import CaseStudyTestimonial from '../containers/AppClassic/CaseStudyTestimonial';
import FeatureSlider from '../containers/AppClassic/FeatureSlider';
import FeatureSliderTwo from '../containers/AppClassic/FeatureSliderTwo';
import JoinTrail from '../containers/AppClassic/JoinTrail';
import Footer from '../containers/AppClassic/Footer';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from '../containers/AppClassic/appClassic.style';

import SEO from '../components/seo';

function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

function useWindowSize() {
  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

export default () => {
  const size = process.browser && useWindowSize();
  const innerWidth = process.browser && size.innerWidth;

  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO title="Fourloop.ai Case Study" />
        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <CaseStudyBanner />
            <CaseStudy_VisitorSection />
            {innerWidth > 1100 ?
              <FeatureSlider /> : <FeatureSliderTwo />
            }
            <CaseStudyTestimonial />
            <JoinTrail />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};
