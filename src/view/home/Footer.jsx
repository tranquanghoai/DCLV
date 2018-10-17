import React from 'react';
// import './../common/myCss/fontastic.css';
// //import './../common/myVendor/swiper.css';
// import './../common/myCss/gallery.css';
// import './../common/myCss/style.default.css';
// import './../common/myCss/custom.css';
// import './../common/myJs/front.js'

class Footer extends React.Component {
  render() {
    return (
      <div>
            <section className="clients bg-black-4">
  <div className="container">
    <div className="swiper-container clients-slider">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="client"><img src="img/logo-1.svg" alt="undefined" /></div>
        </div>
        <div className="swiper-slide">
          <div className="client"><img src="img/logo-2.svg" alt="undefined" /></div>
        </div>
        <div className="swiper-slide">
          <div className="client"><img src="img/logo-3.svg" alt="undefined" /></div>
        </div>
        <div className="swiper-slide">
          <div className="client"><img src="img/logo-4.svg" alt="undefined" /></div>
        </div>
        <div className="swiper-slide">
          <div className="client"><img src="img/logo-5.svg" alt="undefined" /></div>
        </div>
        <div className="swiper-slide">
          <div className="client"><img src="img/logo-1.svg" alt="undefined" /></div>
        </div>
        <div className="swiper-slide">
          <div className="client"><img src="img/logo-1.svg" alt="undefined" /></div>
        </div>
        <div className="swiper-slide">
          <div className="client"><img src="img/logo-2.svg" alt="undefined" /></div>
        </div>
        <div className="swiper-slide">
          <div className="client"><img src="img/logo-3.svg" alt="undefined" /></div>
        </div>
        <div className="swiper-slide">
          <div className="client"><img src="img/logo-4.svg" alt="undefined" /></div>
        </div>
        <div className="swiper-slide">
          <div className="client"><img src="img/logo-5.svg" alt="undefined" /></div>
        </div>
        <div className="swiper-slide">
          <div className="client"><img src="img/logo-1.svg" alt="undefined" /></div>
        </div>
      </div>
    </div>
  </div>
</section>

      <footer className="footer bg-black-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 brief">
        <div className="logo"><img src="img/logo-light.svg" alt="..." width={170} /></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
        <ul className="social list-inline">
          <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" /></a></li>
          <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
          <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" /></a></li>
          <li className="list-inline-item"><a href="#"><i className="fa fa-pinterest" /></a></li>
          <li className="list-inline-item"><a href="#"><i className="fa fa-instagram" /></a></li>
        </ul>
      </div>
      <div className="col-lg-2 links">
        <h3 className="h4 text-thin text-uppercase">Company</h3>
        <ul className="list-unstyled">
          <li><a href="#">Properties</a></li>
          <li><a href="#">Landlords</a></li>
          <li><a href="#">Renters</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
      </div>
      <div className="col-lg-2 links">
        <h3 className="h4 text-thin text-uppercase">Support</h3>
        <ul className="list-unstyled">
          <li><a href="#">Help &amp; FAQ</a></li>
          <li><a href="#">Policy Privacy</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Our Partners</a></li>
        </ul>
      </div>
      <div className="col-lg-4 newsletter">
        <h3 className="h4 text-thin text-uppercase">Newsletter</h3>
        <p>p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
        <form className="newsletter-form">
          <div className="form-group">
            <input type="email" name="email" placeholder="Enter your email address" className="form-control" />
            <button type="submit" className="btn btn-gradient submit"><i className="icon-email-plane" /></button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div className="copyrights bg-black-6">
    <div className="container text-center">
      <p>© Copyrights 2017. Template by <a href="https://bootstrapious.com/">Bootstrapious</a></p>
    </div>
  </div>
</footer>
</div>

    );
  }
}
export default Footer;