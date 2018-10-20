import React from 'react';
class ApartmentReady extends React.Component {
  render() {
    return (
      <section className="apartments pt-0 bg-black-3">
        <div className="container">
          <header className="text-center">
            <h2>Apartments <span className="text-primary">ready</span></h2>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <p className="template-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</p>
              </div>
            </div>
          </header>
          <div className="swiper-container apartments-slider swiper-container-horizontal swiper-container-wp8-horizontal">
            <div className="swiper-wrapper pt-2 pb-5" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
              <div className="swiper-slide swiper-slide-active" style={{ width: '356.667px', marginRight: 20 }}>
                <div className="property">
                  <div className="image"><img src="img/apartments-1.jpg" alt="Condo with pool view" className="img-fluid" />
                    <div className="overlay d-flex align-items-center justify-content-center"><a href="property-single.html" className="btn btn-gradient btn-sm">View Details</a></div>
                  </div>
                  <div className="info"><a href="property-single.html" className="no-anchor-style">
                    <h3 className="h4 text-thin text-uppercase mb-1">Condo with pool view</h3></a>
                    <ul className="tags list-inline">
                      <li className="list-inline-item"><a href="#">Embarcadero,</a></li>
                      <li className="list-inline-item"><a href="#">San Francisco</a></li>
                    </ul>
                    <div className="price text-primary"><strong className="mr-1">$800</strong><small>/ Month</small></div>
                  </div>
                  <div className="statistics d-flex justify-content-between text-center">
                    <div className="item"><strong className="d-block">4</strong><span>Bedrooms</span></div>
                    <div className="item"><strong className="d-block">2</strong><span>Baths</span></div>
                    <div className="item"><strong className="d-block">120</strong><span>ft<sup>2</sup></span></div>
                  </div>
                  <div className="property-footer d-flex justify-content-between align-items-center"><a href="#" className="user d-flex align-items-center no-anchor-style">
                    <div className="avatar"><img src="img/avatar-1.jpg" alt="Edward Snow" className="img-fluid" /></div>
                    <div className="text"><strong className="d-block">Edward Snow</strong><span>27 May 2017</span></div></a><a href="#" className="favourite no-anchor-style"><i className="fa fa-heart" /></a></div>
                </div>
              </div>
              <div className="swiper-slide swiper-slide-next" style={{ width: '356.667px', marginRight: 20 }}>
                <div className="property">
                  <div className="image"><img src="img/apartments-2.jpg" alt="Asset Northern Star" className="img-fluid" />
                    <div className="overlay d-flex align-items-center justify-content-center"><a href="property-single.html" className="btn btn-gradient btn-sm">View Details</a></div>
                  </div>
                  <div className="info"><a href="property-single.html" className="no-anchor-style">
                    <h3 className="h4 text-thin text-uppercase mb-1">Asset Northern Star</h3></a>
                    <ul className="tags list-inline">
                      <li className="list-inline-item"><a href="#">Embarcadero,</a></li>
                      <li className="list-inline-item"><a href="#">San Francisco</a></li>
                    </ul>
                    <div className="price text-primary"><strong className="mr-1">$960</strong><small>/ Month</small></div>
                  </div>
                  <div className="statistics d-flex justify-content-between text-center">
                    <div className="item"><strong className="d-block">4</strong><span>Bedrooms</span></div>
                    <div className="item"><strong className="d-block">2</strong><span>Baths</span></div>
                    <div className="item"><strong className="d-block">120</strong><span>ft<sup>2</sup></span></div>
                  </div>
                  <div className="property-footer d-flex justify-content-between align-items-center"><a href="#" className="user d-flex align-items-center no-anchor-style">
                    <div className="avatar"><img src="img/avatar-2.jpg" alt="Elmar Hubbard" className="img-fluid" /></div>
                    <div className="text"><strong className="d-block">Elmar Hubbard</strong><span>27 May 2017</span></div></a><a href="#" className="favourite no-anchor-style"><i className="fa fa-heart" /></a></div>
                </div>
              </div>
              <div className="swiper-slide" style={{ width: '356.667px', marginRight: 20 }}>
                <div className="property">
                  <div className="image"><img src="img/apartments-3.jpg" alt="Prospect Princeton" className="img-fluid" />
                    <div className="overlay d-flex align-items-center justify-content-center"><a href="property-single.html" className="btn btn-gradient btn-sm">View Details</a></div>
                  </div>
                  <div className="info"><a href="property-single.html" className="no-anchor-style">
                    <h3 className="h4 text-thin text-uppercase mb-1">Prospect Princeton</h3></a>
                    <ul className="tags list-inline">
                      <li className="list-inline-item"><a href="#">Embarcadero,</a></li>
                      <li className="list-inline-item"><a href="#">San Francisco</a></li>
                    </ul>
                    <div className="price text-primary"><strong className="mr-1">$1400</strong><small>/ Month</small></div>
                  </div>
                  <div className="statistics d-flex justify-content-between text-center">
                    <div className="item"><strong className="d-block">4</strong><span>Bedrooms</span></div>
                    <div className="item"><strong className="d-block">2</strong><span>Baths</span></div>
                    <div className="item"><strong className="d-block">120</strong><span>ft<sup>2</sup></span></div>
                  </div>
                  <div className="property-footer d-flex justify-content-between align-items-center"><a href="#" className="user d-flex align-items-center no-anchor-style">
                    <div className="avatar"><img src="img/avatar-3.jpg" alt="Jeniffer Stone" className="img-fluid" /></div>
                    <div className="text"><strong className="d-block">Jeniffer Stone</strong><span>27 May 2017</span></div></a><a href="#" className="favourite no-anchor-style"><i className="fa fa-heart" /></a></div>
                </div>
              </div>
              <div className="swiper-slide" style={{ width: '356.667px', marginRight: 20 }}>
                <div className="property">
                  <div className="image"><img src="img/apartments-4.jpg" alt="Valmark Orchard Square" className="img-fluid" />
                    <div className="overlay d-flex align-items-center justify-content-center"><a href="property-single.html" className="btn btn-gradient btn-sm">View Details</a></div>
                  </div>
                  <div className="info"><a href="property-single.html" className="no-anchor-style">
                    <h3 className="h4 text-thin text-uppercase mb-1">Valmark Orchard Square</h3></a>
                    <ul className="tags list-inline">
                      <li className="list-inline-item"><a href="#">Embarcadero,</a></li>
                      <li className="list-inline-item"><a href="#">San Francisco</a></li>
                    </ul>
                    <div className="price text-primary"><strong className="mr-1">$2400</strong><small>/ Month</small></div>
                  </div>
                  <div className="statistics d-flex justify-content-between text-center">
                    <div className="item"><strong className="d-block">4</strong><span>Bedrooms</span></div>
                    <div className="item"><strong className="d-block">2</strong><span>Baths</span></div>
                    <div className="item"><strong className="d-block">120</strong><span>ft<sup>2</sup></span></div>
                  </div>
                  <div className="property-footer d-flex justify-content-between align-items-center"><a href="#" className="user d-flex align-items-center no-anchor-style">
                    <div className="avatar"><img src="img/avatar-4.jpg" alt="Stanley Payne" className="img-fluid" /></div>
                    <div className="text"><strong className="d-block">Stanley Payne</strong><span>27 May 2017</span></div></a><a href="#" className="favourite no-anchor-style"><i className="fa fa-heart" /></a></div>
                </div>
              </div>
              <div className="swiper-slide" style={{ width: '356.667px', marginRight: 20 }}>
                <div className="property">
                  <div className="image"><img src="img/apartments-5.jpg" alt="Westbourne Terrace" className="img-fluid" />
                    <div className="overlay d-flex align-items-center justify-content-center"><a href="property-single.html" className="btn btn-gradient btn-sm">View Details</a></div>
                  </div>
                  <div className="info"><a href="property-single.html" className="no-anchor-style">
                    <h3 className="h4 text-thin text-uppercase mb-1">Westbourne Terrace</h3></a>
                    <ul className="tags list-inline">
                      <li className="list-inline-item"><a href="#">Embarcadero,</a></li>
                      <li className="list-inline-item"><a href="#">San Francisco</a></li>
                    </ul>
                    <div className="price text-primary"><strong className="mr-1">$800</strong><small>/ Month</small></div>
                  </div>
                  <div className="statistics d-flex justify-content-between text-center">
                    <div className="item"><strong className="d-block">4</strong><span>Bedrooms</span></div>
                    <div className="item"><strong className="d-block">2</strong><span>Baths</span></div>
                    <div className="item"><strong className="d-block">120</strong><span>ft<sup>2</sup></span></div>
                  </div>
                  <div className="property-footer d-flex justify-content-between align-items-center"><a href="#" className="user d-flex align-items-center no-anchor-style">
                    <div className="avatar"><img src="img/avatar-5.jpg" alt="Kacey Stewart" className="img-fluid" /></div>
                    <div className="text"><strong className="d-block">Kacey Stewart</strong><span>27 May 2017</span></div></a><a href="#" className="favourite no-anchor-style"><i className="fa fa-heart" /></a></div>
                </div>
              </div>
              <div className="swiper-slide" style={{ width: '356.667px', marginRight: 20 }}>
                <div className="property">
                  <div className="image"><img src="img/apartments-1.jpg" alt="Condo with pool view" className="img-fluid" />
                    <div className="overlay d-flex align-items-center justify-content-center"><a href="property-single.html" className="btn btn-gradient btn-sm">View Details</a></div>
                  </div>
                  <div className="info"><a href="property-single.html" className="no-anchor-style">
                    <h3 className="h4 text-thin text-uppercase mb-1">Condo with pool view</h3></a>
                    <ul className="tags list-inline">
                      <li className="list-inline-item"><a href="#">Embarcadero,</a></li>
                      <li className="list-inline-item"><a href="#">San Francisco</a></li>
                    </ul>
                    <div className="price text-primary"><strong className="mr-1">$6300</strong><small>/ Month</small></div>
                  </div>
                  <div className="statistics d-flex justify-content-between text-center">
                    <div className="item"><strong className="d-block">4</strong><span>Bedrooms</span></div>
                    <div className="item"><strong className="d-block">2</strong><span>Baths</span></div>
                    <div className="item"><strong className="d-block">120</strong><span>ft<sup>2</sup></span></div>
                  </div>
                  <div className="property-footer d-flex justify-content-between align-items-center"><a href="#" className="user d-flex align-items-center no-anchor-style">
                    <div className="avatar"><img src="img/avatar-1.jpg" alt="Edward Snow" className="img-fluid" /></div>
                    <div className="text"><strong className="d-block">Edward Snow</strong><span>27 May 2017</span></div></a><a href="#" className="favourite no-anchor-style"><i className="fa fa-heart" /></a></div>
                </div>
              </div>
            </div>
            {/* Add Pagination*/}
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-bullets-dynamic" style={{ width: 100 }}><span className="swiper-pagination-bullet swiper-pagination-bullet-active" style={{ left: 30 }} /><span className="swiper-pagination-bullet swiper-pagination-bullet-active-next" style={{ left: 30 }} /><span className="swiper-pagination-bullet swiper-pagination-bullet-active-next-next" style={{ left: 30 }} /><span className="swiper-pagination-bullet" style={{ left: 30 }} /></div>
          </div>
        </div>
      </section>


    );
  }
}
export default ApartmentReady;