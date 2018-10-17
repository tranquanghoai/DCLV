import React from 'react';

import { Link } from 'react-router-dom';

class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container"><a href="index-2.html" className="navbar-brand"><img src="img/logo-light.svg" alt="..." width={180} className="img-fluid" /></a>
          <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><span /><span /><span /></button>
          <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <Link to="" className="nav-link">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/introduction" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/property" className="nav-link">Property</Link>
              </li>
              <li className="nav-item dropdown"><a id="navbarDropdownMenuLink" href="http://example.com/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link">Dropdown <i className="fa fa-angle-down" /></a>
                <ul aria-labelledby="navbarDropdownMenuLink" className="dropdown-menu">
                  <li><a href="#" className="dropdown-item nav-link">Action</a></li>
                  <li><a href="#" className="dropdown-item nav-link">Another action</a></li>
                  <li className="dropdown-submenu"><a id="navbarDropdownMenuLink2" href="http://example.com/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link">Dropdown link <i className="fa fa-angle-down" /></a>
                    <ul aria-labelledby="navbarDropdownMenuLink2" className="dropdown-menu">
                      <li><a href="#" className="dropdown-item nav-link">Action</a></li>
                      <li className="dropdown-submenu"><a id="navbarDropdownMenuLink3" href="http://example.com/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link">
                        Another action <i className="fa fa-angle-down" /></a>
                        <ul aria-labelledby="navbarDropdownMenuLink3" className="dropdown-menu">
                          <li><a href="#" className="dropdown-item nav-link">Action</a></li>
                          <li><a href="#" className="dropdown-item nav-link">Action</a></li>
                          <li><a href="#" className="dropdown-item nav-link">Action</a></li>
                          <li><a href="#" className="dropdown-item nav-link">Action</a></li>
                        </ul>
                      </li>
                      <li><a href="#" className="dropdown-item nav-link">Something else here</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/agent" className="nav-link">Agents</Link>
              </li>
              <li className="nav-item">
                <Link to="/gallery" className="nav-link">Gallery</Link>
              </li>
              <li className="list-inline-item dropdown menu-large"><a id="megamenu" href="#" data-toggle="dropdown" className="nav-link">Template  <i className="fa fa-angle-down" /></a>
                <div aria-labelledby="megamenu" className="dropdown-menu megamenu">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-3"><strong className="text-uppercase">Template Pages 1</strong>
                        <ul className="list-unstyled">
                          <li> <a href="index-2.html">Home</a></li>
                          <li>
                            <Link to='/introduction'>About</Link>

                            {/* <a href="about.html">About</a> */}
                          </li>
                          <li><a href="agents.html">Agents</a></li>
                          <li><a href="agent-single.html">Agent Single</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-3"><strong className="text-uppercase">Template Pages 2</strong>
                        <ul className="list-unstyled">
                          <li><a href="property.html">Property </a></li>
                          <li><a href="property%3dsingle.html">Property Single</a></li>
                          <li><a href="property-grid-full.html">Property Grid Full</a></li>
                          <li><a href="property-list-full.html">Property List Full</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-3"><strong className="text-uppercase">Template Pages 3</strong>
                        <ul className="list-unstyled">
                          <li><a href="submit-property.html">Submit Property</a></li>
                          <li><a href="error-404.html">Error 404</a></li>
                          <li><a href="gallery.html">Gallery</a></li>
                          <li><a href="customer-login.html">Login</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-3"><strong className="text-uppercase">Demo Pages</strong>
                        <ul className="list-unstyled">
                          <li><a href="#">Demo Link</a></li>
                          <li><a href="#">Demo Link</a></li>
                          <li><a href="#">Demo Link</a></li>
                          <li><a href="#">Demo Link</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="secondary-nav-menu list-inline ml-auto mb-0">
              <li className="list-inline-item"><a href="submit-property.html" className="btn btn-primary btn-gradient">Submit property</a></li>
            </ul>
          </div>
        </div>
      </nav>

    );
  }
}
export default Menu;