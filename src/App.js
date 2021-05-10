import React from 'react';
import Map from './pages/Map';
import { HomeWithAuth } from './pages/Home';
import {ProfileWithAuth} from './pages/Profile';
import Header from './components/header';
import {withAuth} from './helpers/AuthContext';
import PropTypes from "prop-types";
import './App.css';


class App extends React.Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool
  }
  
  state = {  
    activePage:'home'
  }

  selectPage = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({activePage: page})
    } else {
      this.setState({activePage: "home"})
    }
    
  };
  
  
  render() { 
    return (
      <>
        {this.props.isLoggedIn ? <Header selectPage={this.selectPage}/> : null}
        <main>
          <section>
            {
              {
                map: <Map {...this.props}/>,
                profile: <ProfileWithAuth selectPage={this.selectPage} {...this.props}/>,
                home: <HomeWithAuth selectPage={this.selectPage} {...this.props}/>
              }[this.state.activePage]
            }
          </section>
        </main>
      </>
      );
  }
}

export default withAuth(App);


