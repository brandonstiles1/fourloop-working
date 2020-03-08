import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Card from 'common/src/components/Card';
import Image from 'common/src/components/Image';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import VisitorSectionWrapper, { SectionObject } from './visitor.style';

import ImageOne from 'common/src/assets/image/appClassic/CaseStudyVisitor.png';
import ImageBg from 'common/src/assets/image/appClassic/visitor_bg.png';

const VisitorSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  btnStyle,
}) => {
  return (
    <VisitorSectionWrapper id="visitorSection">
      <SectionObject>
        <Card className="objectWrapper" {...imageWrapper}>
          <Zoom>
            <Image src={ImageBg} alt="BgImage" />
          </Zoom>
          <Card className="dashboardWrapper" {...imageWrapper}>
            <Fade left>
              <Image src={ImageOne} alt="VisitorDashboard1" />
            </Fade>
          </Card>
        </Card>
      </SectionObject>
      <Container>
        <Box {...textArea}>
          <FeatureBlock
            title={
              <Heading
                content="The results were pretty amazing..."
                {...title}
              />
            }
            description={
              <>
                <Text
                    content="We decreased the page load speed of the site to just under 3 seconds (down from 9). We also used a custom, targeted local SEO strategy to increase the site's rankings & implemented a sales funnel to increase leads."
                    {...description}
                  />
                  <Text
                    content="The latter 2 strategies took them from Page 6 of Google to Page 1 for their targeted keywords, and increased online leads by 12%."
                    {...description}
                  />
                </>
            }
            button={
              <Link to='/contact'>
                <Button title="I WANT THIS!" {...btnStyle} />
              </Link>
            }
          />
        </Box>
      </Container>
    </VisitorSectionWrapper>
  );
};

VisitorSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

VisitorSection.defaultProps = {
  textArea: {
    width: ['100%', '100%', '45%'],
    ml: [0, 0, '58%'],
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  title: {
    fontSize: ['4vh', '4vh', '26px', '4.5vh', '4.5vh'],
    fontWeight: '400',
    color: '#372e2c',
    letterSpacing: '0',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    lineHeight: '1',
  },
  description: {
    fontSize: '16px',
    fontWeight: '300',
    color: 'rgba(0,0,0,0.6)',
    lineHeight: '1.75',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '400',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
};

export default VisitorSection;
