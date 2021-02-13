import React from 'react'
import Header from './medical-component/Header/Header'
import MedicalStore from './medical-component/MedicalStore'
import './index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Cart from './medical-component/Cart/Cart';
import SingleItem from './medical-component/SingleItem/SingleItem';
import {connect} from "react-redux";


const App = ({current}) => {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Switch>
          <Route exact path="/" component={MedicalStore} />
          <Route exact path="/cart" component={Cart} />
          {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={SingleItem} />
          )}
        </Switch>
      </div>
    </Router>
  )
}
const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);


