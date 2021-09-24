import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/userActions';

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

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
              <LinkContainer to='item/613c56ba902b44af907db16c'>
                <Nav.Link className='nav-links'>
                  <i class='fas fa-pizza-slice mr-3'>
                    <span className='roboto p-1'>PIZZA</span>{' '}
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

              {/* <LinkContainer to='/about'>
                <Nav.Link className='nav-links'>
                  <i className='fas fa-question-circle mr-3'>
                    <span className='roboto p-1'>ABOUT</span>
                  </i>
                </Nav.Link>
              </LinkContainer> */}

              <LinkContainer to='/locations'>
                <Nav.Link className='nav-links'>
                  <i className='fas fa-thumbtack mr-3'>
                    <span className='roboto p-1'>LOCATIONS</span>
                  </i>
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link className='nav-links'>
                    <i className='fas fa-user mr-3 text-center'>
                      {' '}
                      <span className='roboto p-1'>SIGN IN</span>
                    </i>
                  </Nav.Link>
                </LinkContainer>
              )}

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/menuItemlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}

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
