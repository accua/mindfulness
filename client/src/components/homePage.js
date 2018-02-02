import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  renderHome() {
    return (
      <div>
        {/* <nav className="navbar navbar-expand-lg fixed-top">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/entries"><Link to={`/entries`}>Login
              </Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav> */}

        <div className="jumbotron jumbotron-fluid" id="homePageHero" >
          <div className="container">
            <h1 className="display-3">Mindfulness</h1>
            <p className="lead">Take a break from the world and look within.</p>
          </div>
        </div>

        <div className="container-fluid" id="login">
          <div className="row text-center" id="login-h1">
            <div className="col-lg-12">
              <h1>
                Mindfulness Movement
              </h1>
            </div>
          </div>
          <div className="row text-center" id="login-row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className='btn-cont'>
                    <a className='btn' href='#'>
                      Sign Up
                      <span className='line-1'></span>
                      <span className='line-2'></span>
                      <span className='line-3'></span>
                      <span className='line-4'></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card text-center">
                <div className="card-body">
                  <div className='btn-cont'>
                    <a className='btn' href='/entries'>
                      Login
                      <span className='line-1'></span>
                      <span className='line-2'></span>
                      <span className='line-3'></span>
                      <span className='line-4'></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid" id="info-container">
          <div className="row">
            <div className="col-sm-6  card-img " id="info-card">
              <div className="card float-left">
              </div>
            </div>
            <div className="col-sm-6" id="info-text">
              <div className="card border-0 text-left">
                <div id="info-card-body" className="card-body">
                  <h2 className="card-title">Philosophy</h2>
                  <p className="card-text">The mindfulness application sought embody the idea that a user experience on a website should not be distracting, but empowering in such a way that allows the user to use the tool in a meaningful manner. Mindfulness allows the user to log their feelings and rate their mood before and after a meditation session so they can reflect on their thoughts. The user can then share these experiences with others if they like and gain insight, or keep them private as a personal log.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer id="myFooter">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3">
                        <h3><a href="#"> Mindfulness </a></h3>
                        <p>Portland, OR</p>
                    </div>
                    <div className="col-sm-3">
                    </div>
                    <div className="col-sm-3">
                    </div>
                    <div className="col-sm-3">
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>© 2017 Mindfulness With Mom </p>
            </div>
        </footer>
      </div>
    );
  }



  render() {
    return (
      <div>
        {this.renderHome()}
      </div>
    );
  }
}

export default (HomePage);
