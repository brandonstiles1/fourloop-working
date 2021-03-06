import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import 'react-image-gallery/styles/css/image-gallery.css';
import Container from 'common/src/components/UI/Container';
import FeatureSliderWrapper from './featureSlider.style';
import Image1 from 'common/src/assets/image/appClassic/CaseStudySlider.png';
import Image2 from 'common/src/assets/image/appClassic/CaseStudySlider.png';
import Image3 from 'common/src/assets/image/appClassic/CaseStudySlider.png';
import Image4 from 'common/src/assets/image/appClassic/CaseStudySlider.png';
import Image5 from 'common/src/assets/image/appClassic/CaseStudySlider.png';
import Thumb1 from 'common/src/assets/image/appClassic/6.svg';
import Thumb2 from 'common/src/assets/image/appClassic/1.svg';
import Thumb3 from 'common/src/assets/image/appClassic/2.svg';
import Thumb4 from 'common/src/assets/image/appClassic/3.svg';
import Thumb5 from 'common/src/assets/image/appClassic/4.svg';
import Thumb6 from 'common/src/assets/image/appClassic/5.svg';

const images = [
  {
    original: `${Image1}`,
    thumbnail: `${Thumb1}`,
    thumbnailLabel: 'Lightspeed Page Loads',
    originalAlt: 'slide one',
    thumbnailAlt: 'thumb one',
  },
  {
    original: `${Image2}`,
    thumbnail: `${Thumb2}`,
    thumbnailLabel: 'Effective SEO Strategy',
    originalAlt: 'slide two',
    thumbnailAlt: 'thumb two',
  },
  {
    original: `${Image3}`,
    thumbnail: `${Thumb3}`,
    thumbnailLabel: 'A/B Headline Testing',
    originalAlt: 'slide three',
    thumbnailAlt: 'thumb three',
  },
  {
    original: `${Image2}`,
    thumbnail: `${Thumb4}`,
    thumbnailLabel: 'Built-In Leads Funnel',
    originalAlt: 'slide four',
    thumbnailAlt: 'thumb four',
  },
  {
    original: `${Image4}`,
    thumbnail: `${Thumb5}`,
    thumbnailLabel: 'Client-First Copy',
    originalAlt: 'slide five',
    thumbnailAlt: 'thumb five',
  },
  {
    original: `${Image5}`,
    thumbnail: `${Thumb6}`,
    thumbnailLabel: 'Omni-Aware Modules',
    originalAlt: 'slide six',
    thumbnailAlt: 'thumb six',
  },
];

const FeatureSlider = ({ sectionSubTitle, sectionTitle, sectionHeader }) => {
  return (
    <FeatureSliderWrapper>
      <div className="FeatureSliderInner">
        <span> </span>
        <span> </span>
        <span> </span>
      </div>
      <Container>
        <Box {...sectionHeader}>
          <Text {...sectionSubTitle} />
          <Heading {...sectionTitle} />
        </Box>
        <Box className="FeatureSlider">
          <ImageGallery
            items={images}
            className="Slider-img"
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
            showBullets={true}
            autoPlay={true}
          />
        </Box>
      </Container>
    </FeatureSliderWrapper>
  );
};

// FeatureSlider style props
FeatureSlider.propTypes = {
  sectionSubTitle: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionHeader: PropTypes.object,
};

// FeatureSlider default style
FeatureSlider.defaultProps = {
  sectionHeader: {},
  sectionSubTitle: {
    content: 'FEATURES',
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.13em',
    fontWeight: '700',
    color: '#EC4B50',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    content: "What went into the new website to increase its ROI?",
    textAlign: 'center',
    fontSize: ['4vh', '4vh', '24px', '4.5vh', '4.5vh'],
    fontWeight: '400',
    color: '#372e2c',
    letterSpacing: '-0.025em',
    mb: '0',
  },
};

export default FeatureSlider;
