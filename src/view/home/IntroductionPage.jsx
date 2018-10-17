import T from '../common/js/common';
import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../redux/user.jsx'
import Carousel from './Carousel.jsx';

class IntroductionPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div classname="container">
        <section className="hero-page bg-black-3">
          <div className="container">
            <h1 className="h2">About Us</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
                <li aria-current="page" className="breadcrumb-item active">About Us</li>
              </ol>
            </nav>
          </div>
        </section>
        {/* Brief Section*/}
        <section className="about-brief bg-black-2">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6">
                <h2 className="h3 text-thin has-line">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                <p className="template-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. LOLUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className="template-text">LOLDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              </div>
              <div className="col-lg-6"><img src="img/hero-bg-1.jpg" alt="..." className="img-fluid" /></div>
            </div>
          </div>
        </section>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});
const mapActionsToProps = {
  loginUser: loginUser
};
export default connect(mapStateToProps, mapActionsToProps)(IntroductionPage);