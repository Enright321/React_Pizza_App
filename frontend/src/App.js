import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import SpecificItemScreen from './screens/SpecificItemScreen';
import MenuScreen from './screens/MenuScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/menu/:id' component={MenuScreen} />
          <Route path='/item/:id' component={SpecificItemScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
