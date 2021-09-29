import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import {Template} from './components/MainComponents';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import './App.css';
const App = (props) => {
  return (
    <BrowserRouter>
      <Template>
        <Header />
        <Routes />
        <Footer />
      </Template>

    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

const mapDispathToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, mapDispathToProps)(App);