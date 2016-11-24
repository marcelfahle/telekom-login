import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import BrandBar from 'components/BrandBar';
import ContentWrapper from 'components/ContentWrapper';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import AppPanel from 'components/AppPanel';

import './App.scss';


import Rebase from 're-base';

var base = Rebase.createClass({
  apiKey: "AIzaSyDQNjuj0vKaX5AjAz4aOpepoiLmjsMXw8Y",
  authDomain: "telekom-login.firebaseapp.com",
  databaseURL: "https://telekom-login.firebaseio.com",
  storageBucket: "telekom-login.appspot.com",
});


var isSticky = false;


class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      isHeaderSticky: false,
      menu: false,
      appPanel: false,
      data: {},
      home: {},
      funktionen: {},
      sogehts: {}
    }
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleAppMenu = this.toggleAppMenu.bind( this );
    this.setHeaderStickiness = this.setHeaderStickiness.bind( this );
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
    this.reffunktionen = base.syncState('sogehts', {
      context: this,
      asArray: false,
      state: 'sogehts'
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



  componentDidMount() {
    window.onscroll = () => {
      if(window.pageYOffset > 80) {
        this.setHeaderStickiness( true );
      } else {
        this.setHeaderStickiness( false );
      }
    }
  }

  toggleMenu( e ) {
    this.setState({menu: !this.state.menu});
  }

  toggleAppMenu( e ) {
    e.preventDefault();
    this.setState({appPanel: !this.state.appPanel});
  }

  setHeaderStickiness( sticky ) {
    if (sticky !== isSticky) {
      isSticky = sticky;
      const wrap = document.getElementsByClassName('viewport')[0];
      wrap.classList.toggle( 'sticky' );
    }
  }

  render() {
    const headerClasses = classNames({
      'menu': this.state.menu,
      'show-app-panel': this.state.appPanel
    });
    return(
      <div className="viewport">
        <header className={headerClasses}>
          <BrandBar />
          <NavBar toggleMenu={this.toggleMenu} toggleAppMenu={this.toggleAppMenu} />
          
          <AppPanel />
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
