import React from 'react';


class ListNewHouse extends React.Component{
    render(){    
      return(
        <section className="new-properties bg-black-3">
  <div className="container">
    <header className="text-center">
      <h2>New houses <span className="text-primary">for sale</span></h2>
      <div className="row">
        <p className="template-text col-lg-8 mx-auto">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</p>
      </div>
    </header>
    <div className="row">
      <div className="col-lg-4">
        <div className="property mb-5 mb-lg-0">
          <div className="image"><img src="img/property-1.jpg" alt="Condo with pool view" className="img-fluid" />
            <div className="overlay d-flex align-items-center justify-content-center"><a href="property-single.html" className="btn btn-gradient btn-sm">View Details</a></div>
          </div>
          <div className="info"><a href="property-single.html" className="no-anchor-style">
              <h3 className="h4 text-thin text-uppercase mb-1">Condo with pool view</h3></a>
            <ul className="tags list-inline">
              <li className="list-inline-item"><a href="#">Embarcadero,</a></li>
              <li className="list-inline-item"><a href="#">San Francisco</a></li>
            </ul>
            <div className="price text-primary"><strong className="mr-1">$8400</strong></div>
          </div>
          <div className="statistics d-flex justify-content-between text-center">
            <div className="item"><strong className="d-block">4</strong><span>Bedrooms</span></div>
            <div className="item"><strong className="d-block">2</strong><span>Baths</span></div>
            <div className="item"><strong className="d-block">120</strong><span>ft<sup>2</sup></span></div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="property mb-5 mb-lg-0">
          <div className="image"><img src="img/property-2.jpg" alt="The Chalet Estate" className="img-fluid" />
            <div className="overlay d-flex align-items-center justify-content-center"><a href="property-single.html" className="btn btn-gradient btn-sm">View Details</a></div>
          </div>
          <div className="info"><a href="property-single.html" className="no-anchor-style">
              <h3 className="h4 text-thin text-uppercase mb-1">The Chalet Estate</h3></a>
            <ul className="tags list-inline">
              <li className="list-inline-item"><a href="#">Embarcadero,</a></li>
              <li className="list-inline-item"><a href="#">San Francisco</a></li>
            </ul>
            <div className="price text-primary"><strong className="mr-1">$6900</strong></div>
          </div>
          <div className="statistics d-flex justify-content-between text-center">
            <div className="item"><strong className="d-block">4</strong><span>Bedrooms</span></div>
            <div className="item"><strong className="d-block">2</strong><span>Baths</span></div>
            <div className="item"><strong className="d-block">120</strong><span>ft<sup>2</sup></span></div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="property mb-5 mb-lg-0">
          <div className="image"><img src="img/property-3.jpg" alt="Asset Northern Star" className="img-fluid" />
            <div className="overlay d-flex align-items-center justify-content-center"><a href="property-single.html" className="btn btn-gradient btn-sm">View Details</a></div>
          </div>
          <div className="info"><a href="property-single.html" className="no-anchor-style">
              <h3 className="h4 text-thin text-uppercase mb-1">Asset Northern Star</h3></a>
            <ul className="tags list-inline">
              <li className="list-inline-item"><a href="#">Embarcadero,</a></li>
              <li className="list-inline-item"><a href="#">San Francisco</a></li>
            </ul>
            <div className="price text-primary"><strong className="mr-1">$9300</strong></div>
          </div>
          <div className="statistics d-flex justify-content-between text-center">
            <div className="item"><strong className="d-block">4</strong><span>Bedrooms</span></div>
            <div className="item"><strong className="d-block">2</strong><span>Baths</span></div>
            <div className="item"><strong className="d-block">120</strong><span>ft<sup>2</sup></span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      );
    }
}
export default ListNewHouse;