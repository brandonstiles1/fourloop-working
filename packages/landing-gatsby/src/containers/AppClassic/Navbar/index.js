import React, { useState, useRef } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import ScrollSpyMenu from 'common/src/components/ScrollSpyMenu';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import { x } from 'react-icons-kit/feather/x';
import { search } from 'react-icons-kit/feather/search';
import Logo from 'common/src/components/UIElements/Logo';
import Button from 'common/src/components/Button';
import Text from 'common/src/components/Text';
import Box from 'common/src/components/Box';
import Container from 'common/src/components/UI/Container';
import useOnClickOutside from 'common/src/hooks/useOnClickOutside';
import NavbarWrapper, { MenuArea, MobileMenu, MobileMenuContactBox, Search } from './navbar.style';

const Navbar = ({
  contactLink,
  boxWrapper
}) => {
  const data = useStaticQuery(graphql`
    query {
      appClassicJson {
        navbar {
          logo {
            publicURL
          }
          navMenu {
            id
            label
            path
            offset
          }
        }
      }
    }
  `);
  const { logo, navMenu } = data.appClassicJson.navbar;

  const [state, setState] = useState({
    search: '',
    searchToggle: false,
    mobileMenu: false,
  });

  const searchRef = useRef(null);
  useOnClickOutside(searchRef, () =>
    setState({ ...state, searchToggle: false })
  );

  const toggleHandler = type => {
    if (type === 'search') {
      setState({
        ...state,
        search: '',
        searchToggle: !state.searchToggle,
        mobileMenu: false,
      });
    }

    if (type === 'menu') {
      setState({
        ...state,
        mobileMenu: !state.mobileMenu,
      });
    }
  };

  const handleOnChange = event => {
    setState({
      ...state,
      search: event.target.value,
    });
  };

  const handleSearchForm = event => {
    event.preventDefault();

    if (state.search !== '') {
      console.log('search data: ', state.search);

      setState({
        ...state,
        search: '',
      });
    } else {
      console.log('Please fill this field.');
    }
  };

  return (
    <NavbarWrapper className="navbar">
      <Container>
        <Logo
          className="logo"
          href="/"
          logoSrc={logo.publicURL}
          title="Fourloop.ai"
        />
        {/* end of logo */}

        <MenuArea className={state.searchToggle ? 'active' : ''}>
          <ScrollSpyMenu className="menu" menuItems={navMenu} offset={-84} />
          {/* end of main menu */}

          <Search className="search" ref={searchRef}>
            <form onSubmit={handleSearchForm}>
              <input
                type="text"
                value={state.search}
                placeholder="Enter your keyword"
                onChange={handleOnChange}
              />
            </form>
            <Button
              className="text"
              variant="textButton"
              icon={<Icon icon={state.searchToggle ? x : search} />}
              onClick={() => toggleHandler('search')}
            />
          </Search>
          {/* end of search */}

          <Link to="/contact" offset={84}>
            <Button className="trail" title="Get Started" />
          </Link>

          <Button
            className="menubar"
            icon={
              state.mobileMenu ? (
                <Icon className="bar" icon={x} style={{ color: 'white' }} />
              ) : (
                  <Fade>
                    <Icon className="close" icon={menu} style={{ color: 'white' }} />
                  </Fade>
                )
            }
            color="#0F2137"
            variant="textButton"
            onClick={() => toggleHandler('menu')}
          />
        </MenuArea>
      </Container>

      {/* start mobile menu */}
      <MobileMenu className={`mobile-menu ${state.mobileMenu ? 'active' : ''}`}>
        <Container>
          <ScrollSpyMenu className="menu" menuItems={navMenu} offset={-84} />
          <MobileMenuContactBox {...boxWrapper}>
            <AnchorLink href='tel:4045133173'>404-513-3173</AnchorLink>
            <AnchorLink href='mailto:hello@fourloop.ai'> hello@fourloop.ai</AnchorLink>
          </MobileMenuContactBox>
          <Link to='/contact'>
            <Button title="Get Started" />
          </Link>
        </Container>
      </MobileMenu>
      {/* end of mobile menu */}
    </NavbarWrapper>
  );
};

Navbar.defaultProps = {
  contactLink: {
    color: 'red !important',
    fontSize: '12vh'
  },
  boxWrapper: {
    display: 'flex',
    flexDirection: 'column',
  }
}

export default Navbar;
