import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import SpecificItemScreen from './screens/SpecificItemScreen';
import CartScreen from './screens/CartScreen';
import MenuScreen from './screens/MenuScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import MenuItemListScreen from './screens/MenuItemListScreen';
import MenuItemEditScreen from './screens/MenuItemEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import LocationsScreen from './screens/LocationsScreen';
import AboutScreen from './screens/AboutScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Route path='/' component={HomeScreen} exact />
        <Container>
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/locations' component={LocationsScreen} />
          <Route path='/about' component={AboutScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/menu/:id' component={MenuScreen} />
          <Route path='/item/:id' component={SpecificItemScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/menuItemList' component={MenuItemListScreen} />
          <Route path='/admin/orderList' component={OrderListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            path='/admin/menuItem/:id/edit'
            component={MenuItemEditScreen}
          />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
