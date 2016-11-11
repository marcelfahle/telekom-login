import React, { PropTypes } from 'react';
import classNames from 'classnames';

import BrandBar from 'components/BrandBar';
import ContentWrapper from 'components/ContentWrapper';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import './App.scss';


import Rebase from 're-base';

var base = Rebase.createClass({
  apiKey: "AIzaSyDQNjuj0vKaX5AjAz4aOpepoiLmjsMXw8Y",
  authDomain: "telekom-login.firebaseapp.com",
  databaseURL: "https://telekom-login.firebaseio.com",
  storageBucket: "telekom-login.appspot.com",
});




class App extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      menu: false,
      data: {},
      home: {},
      funktionen: {}
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  init() {
    this.ref = base.syncState('home', {
      context: this,
      asArray: false,
      state: 'home'
    });
    this.reffunktionen = base.syncState('funktionen', {
      context: this,
      asArray: false,
      state: 'funktionen'
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  componentWillReceiveProps(){
    base.removeBinding(this.ref);
    this.init();
  }

  componentWillMount () {
    this.init();
  }

  toggleMenu( e ) {
    this.setState({menu: !this.state.menu});
  }

  render() {
    const headerClasses = classNames({
      'menu': this.state.menu
    });
    return(
      <div className="viewport">
        <header className={headerClasses}>
          <BrandBar />
          <NavBar toggleMenu={this.toggleMenu} />
        </header>
        <main>
          {this.props.children && React.cloneElement(this.props.children, {
            data: this.state
          })}
        </main>
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
};

export default App;
