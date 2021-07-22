import React, { Component } from 'react';
import Banner from './components/Banner';
import Features from './components/feature/Features'
import ShoutOut from './components/ShoutOut'
import Pricing from './components/Pricing'
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';

import './assets/scss/main.scss'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <>
        <NavMenu />
        <Banner/>
        <Features/>
        <ShoutOut/>
        <Pricing/>
        <Footer/>
      </>
    )
  }
}