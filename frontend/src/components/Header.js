import { Navbar, Nav, Container } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar className='py-5' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img className='brand-img' src='/images/brand.png' alt='' />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto mx-auto'>
              <LinkContainer to='#menu'>
                <Nav.Link className='nav-links'>
                  <i className='fas fa-clipboard mr-3 '>
                    <span className='roboto p-1'>MENU</span>{' '}
                  </i>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/contact'>
                <Nav.Link className='nav-links'>
                  <i className='fas fa-phone mr-3 text-center'>
                    {' '}
                    <span className='roboto p-1'>CONTACT US</span>{' '}
                  </i>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/about'>
                <Nav.Link className='nav-links'>
                  <i className='fas fa-question-circle mr-3'>
                    <span className='roboto p-1'>ABOUT</span>
                  </i>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/locations'>
                <Nav.Link className='nav-links'>
                  <i className='fas fa-thumbtack mr-3'>
                    <span className='roboto p-1'>LOCATIONS</span>
                  </i>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/login'>
                <Nav.Link className='nav-links'>
                  <i className='fas fa-user mr-3 text-center'>
                    {' '}
                    <span className='roboto p-1'>SIGN IN</span>
                  </i>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/cart'>
                <Nav.Link className='btn'>SHOPPING CART</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
