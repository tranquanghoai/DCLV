import React from 'react';

class AgentPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section className="hero-page bg-black-3">
          <div className="container">
            <h1 className="h2">Our Agents</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
                <li aria-current="page" className="breadcrumb-item active">Agents</li>
              </ol>
            </nav>
          </div>
        </section>
        {/* Agents Listing Section*/}
        <section className="agents-listing bg-black-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="agent">
                  <div className="image"><img src="img/agent-1.jpg" alt="Richard Wood" className="img-fluid" />
                    <ul className="contact-info list-unstyled mb-0">
                      <li><a href="mailto:Richard@Example.com"><i className="icon-envelope-1" />Richard@Example.com</a></li>
                      <li><a href="#"><i className="icon-smart-phone-2" />(305) 555-4555</a></li>
                    </ul>
                  </div>
                  <div className="info"><a href="agent-single.html" className="no-anchor-style">
                    <h3 className="h4 text-thin text-uppercase mb-1">Richard Wood</h3></a>
                    <p className="mb-0">Buying agent</p>
                  </div>
                  <ul className="agent-social list-inline d-flex justify-content-between align-items-center">
                    <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-pinterest" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-instagram" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="agent">
                  <div className="image"><img src="img/agent-2.jpg" alt="Frank Mendez" className="img-fluid" />
                    <ul className="contact-info list-unstyled mb-0">
                      <li><a href="mailto:Frank@Example.com"><i className="icon-envelope-1" />Frank@Example.com</a></li>
                      <li><a href="#"><i className="icon-smart-phone-2" />(305) 555-4555</a></li>
                    </ul>
                  </div>
                  <div className="info"><a href="agent-single.html" className="no-anchor-style">
                    <h3 className="h4 text-thin text-uppercase mb-1">Frank Mendez</h3></a>
                    <p className="mb-0">Real estate broker</p>
                  </div>
                  <ul className="agent-social list-inline d-flex justify-content-between align-items-center">
                    <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-pinterest" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-instagram" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="agent">
                  <div className="image"><img src="img/agent-3.jpg" alt="Ashley Williams" className="img-fluid" />
                    <ul className="contact-info list-unstyled mb-0">
                      <li><a href="mailto:Ashley@Example.com"><i className="icon-envelope-1" />Ashley@Example.com</a></li>
                      <li><a href="#"><i className="icon-smart-phone-2" />(305) 555-4555</a></li>
                    </ul>
                  </div>
                  <div className="info"><a href="agent-single.html" className="no-anchor-style">
                    <h3 className="h4 text-thin text-uppercase mb-1">Ashley Williams</h3></a>
                    <p className="mb-0">Sales executive</p>
                  </div>
                  <ul className="agent-social list-inline d-flex justify-content-between align-items-center">
                    <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-pinterest" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-instagram" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className="agent">
                  <div className="image"><img src="img/agent-1.jpg" alt="Richard Wood" className="img-fluid" />
                    <ul className="contact-info list-unstyled mb-0">
                      <li><a href="mailto:Richard@Example.com"><i className="icon-envelope-1" />Richard@Example.com</a></li>
                      <li><a href="#"><i className="icon-smart-phone-2" />(305) 555-4555</a></li>
                    </ul>
                  </div>
                  <div className="info"><a href="agent-single.html" className="no-anchor-style">
                    <h3 className="h4 text-thin text-uppercase mb-1">Richard Wood</h3></a>
                    <p className="mb-0">Buying agent</p>
                  </div>
                  <ul className="agent-social list-inline d-flex justify-content-between align-items-center">
                    <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-pinterest" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-instagram" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="agent">
                  <div className="image"><img src="img/agent-2.jpg" alt="Frank Mendez" className="img-fluid" />
                    <ul className="contact-info list-unstyled mb-0">
                      <li><a href="mailto:Frank@Example.com"><i className="icon-envelope-1" />Frank@Example.com</a></li>
                      <li><a href="#"><i className="icon-smart-phone-2" />(305) 555-4555</a></li>
                    </ul>
                  </div>
                  <div className="info"><a href="agent-single.html" className="no-anchor-style">
                    <h3 className="h4 text-thin text-uppercase mb-1">Frank Mendez</h3></a>
                    <p className="mb-0">Real estate broker</p>
                  </div>
                  <ul className="agent-social list-inline d-flex justify-content-between align-items-center">
                    <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-pinterest" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-instagram" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="agent">
                  <div className="image"><img src="img/agent-3.jpg" alt="Ashley Williams" className="img-fluid" />
                    <ul className="contact-info list-unstyled mb-0">
                      <li><a href="mailto:Ashley@Example.com"><i className="icon-envelope-1" />Ashley@Example.com</a></li>
                      <li><a href="#"><i className="icon-smart-phone-2" />(305) 555-4555</a></li>
                    </ul>
                  </div>
                  <div className="info"><a href="agent-single.html" className="no-anchor-style">
                    <h3 className="h4 text-thin text-uppercase mb-1">Ashley Williams</h3></a>
                    <p className="mb-0">Sales executive</p>
                  </div>
                  <ul className="agent-social list-inline d-flex justify-content-between align-items-center">
                    <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-pinterest" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-instagram" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="agent">
                  <div className="image"><img src="img/agent-1.jpg" alt="Richard Wood" className="img-fluid" />
                    <ul className="contact-info list-unstyled mb-0">
                      <li><a href="mailto:Richard@Example.com"><i className="icon-envelope-1" />Richard@Example.com</a></li>
                      <li><a href="#"><i className="icon-smart-phone-2" />(305) 555-4555</a></li>
                    </ul>
                  </div>
                  <div className="info"><a href="agent-single.html" className="no-anchor-style">
                    <h3 className="h4 text-thin text-uppercase mb-1">Richard Wood</h3></a>
                    <p className="mb-0">Buying agent</p>
                  </div>
                  <ul className="agent-social list-inline d-flex justify-content-between align-items-center">
                    <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-pinterest" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-instagram" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <nav aria-label="Page navigation example" className="d-flex justify-content-center mt-5">
            <ul className="pagination m-0">
              <li className="page-item"><a href="#" aria-label="Previous" className="page-link"><span aria-hidden="true">«</span><span className="sr-only">Previous</span></a></li>
              <li className="page-item"><a href="#" className="page-link active">1</a></li>
              <li className="page-item"><a href="#" className="page-link">2</a></li>
              <li className="page-item"><a href="#" className="page-link">3</a></li>
              <li className="page-item"><a href="#" aria-label="Next" className="page-link"><span aria-hidden="true">»</span><span className="sr-only">Next</span></a></li>
            </ul>
          </nav>
        </section>
      </div>


    );
  }
}
export default AgentPage;