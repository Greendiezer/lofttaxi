import React from 'react';
import Map from './pages/Map';
import { HomeWithAuth } from './pages/Home';
import {ProfileWithAuth} from './pages/Profile';
import Header from './components/header';
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import {PrivateRoute} from './components/PrivateRoute'
import './App.css';

class App extends React.Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool
  }
  
  render() { 
    return (
      <>
        {this.props.isLoggedIn ? <Header selectPage={this.selectPage}/> : null}
        <main>
          <section>
            <Switch>
              <Route exact path="/" component={HomeWithAuth} {...this.props}/>
              <PrivateRoute  path="/map" component={Map} {...this.props} />
              <PrivateRoute  path="/profile" component={ProfileWithAuth} {...this.props}/>
            </Switch>

          </section>
        </main>
      </>
      );
  }
}

export default connect(
  state => ({isLoggedIn: state.auth.isLoggedIn})
)(App);


