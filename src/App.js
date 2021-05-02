import React from 'react';
import Map from './components/map';
import { Login } from './components/login';
import Profile from './components/profile';
import Header from './components/header'
import './App.css';


class App extends React.Component {
  state = {  
    activePage:''
  }

  selectPage = (page) => {
    this.setState({activePage: page})
  };
  
  
  render() { 
    return (
      <>
        <Header selectPage={this.selectPage}/>
        <main>
          <section>
            {
              {
                map: <Map />,
                profile: <Profile />,
                login: <Login selectPage={this.selectPage}/>
              }[this.state.activePage]
            }
          </section>
        </main>
      </>
      );
  }
}

export default App;


