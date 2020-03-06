import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Image from 'common/src/components/Image';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import JoinTrailArea, { ContentWrapper, ButtonGroup } from './joinTrail.style';

const JoinTrail = () => {
  const data = useStaticQuery(graphql`
    query {
      appClassicJson {
        joinSlack {
          logo {
            publicURL
          }
          title
          description
        }
      }
    }
  `);
  const { logo, title, description } = data.appClassicJson.joinSlack;

  return (
    <JoinTrailArea id="trail">
      <ContentWrapper>
        <Fade up delay={100}>
          <Heading content={title} />
        </Fade>
        <Fade up delay={200}>
          <Text content={description} />
        </Fade>
        <Fade up delay={300}>
          <ButtonGroup>
            <Link to='/contact'>
              <Button className='GetStartedButton' title="Get Started" style={{ color: 'white', border: 'none' }} />
            </Link>
            <Link to='/case-study'>
              <Button title="Case Study" variant="textButton" />
            </Link>
          </ButtonGroup>
        </Fade>
      </ContentWrapper>
    </JoinTrailArea>
  );
};

export default JoinTrail;
