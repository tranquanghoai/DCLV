import React from 'react';
// import './../common/myCss/fontastic.css';
// //import './../common/myVendor/swiper.css';
// import './../common/myCss/gallery.css';
// import './../common/myCss/style.default.css';
// import './../common/myCss/custom.css';
// import './../common/myJs/front.js'

class Title extends React.Component{
    render(){
        
  return(
  <header className="header">
    {/* Top Bar    */}
    <div className="top-bar">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block menu-left">
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#">Delivery</a></li>
              <li className="list-inline-item"><a href="#">Payment</a></li>
              <li className="list-inline-item"><a href="#">Blog</a></li>
              <li className="list-inline-item"><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-lg-6 text-right menu-right">
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#" className="search-btn"><i className="fa fa-search" /></a></li>
              <li className="list-inline-item"><a href="#"><i className="fa fa-heart-o" />Favourites</a></li>
              <li className="list-inline-item"><a href="customer-login.html" className="pr-0 border-right-0"><i className="fa fa-user" />User</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="search-area">                       
        <div className="search-inner d-flex align-items-center justify-content-center">
          <div className="close-btn">Close<i className="icon-close-round" /></div>
          <form className="search-form">
            <div className="form-group">
              <input type="search" placeholder="What are you searching for..." />
              <button type="submit" className="submit">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </header>

        );
    }
}
export default Title;