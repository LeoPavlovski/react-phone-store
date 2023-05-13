import './App.css';
import React from 'react';
import { Switch,Route } from 'react-router-dom';
// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Details from './components/Details';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Modal from './components/Modal';


function App() {
  return (
 <React.Fragment>
  {/* Displayed on every page */}
  <Navbar/>
    <Switch>
    <Route exact path="/" component={ProductList}></Route>
    <Route path="/details" component={Details}></Route>
      <Route path="/cart" component={Cart}></Route>
      <Route component={Default}></Route>
    </Switch>
    <Modal/>


 </React.Fragment>
  );
}

export default App;
