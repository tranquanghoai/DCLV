import React from 'react';


class FeaturedProperties extends React.Component {
    render() {

        return (
            <div className="widget featured-widget">
            <div className="widget-header"><strong className="has-line">Featured Properties</strong></div>
            <div className="property-thumb d-flex align-items-center">
              <div className="image"><img src="img/property-thumb-1.jpg" alt="..." className="img-fluid" /></div>
              <div className="text"><a href="#" className="no-anchor-style">Asset Northern Star</a>
                <p>GTb Financial destrict, New York</p><span className="price">$140.000</span>
              </div>
            </div>
            <div className="property-thumb d-flex align-items-center">
              <div className="image"><img src="img/property-thumb-2.jpg" alt="..." className="img-fluid" /></div>
              <div className="text"><a href="#" className="no-anchor-style">Rivington Hopoken</a>
                <p>GTb Financial destrict, New York</p><span className="price">$54.000</span>
              </div>
            </div>
            <div className="property-thumb d-flex align-items-center">
              <div className="image"><img src="img/property-thumb-3.jpg" alt="..." className="img-fluid" /></div>
              <div className="text"><a href="#" className="no-anchor-style">Prospect Princeton</a>
                <p>GTb Financial destrict, New York</p><span className="price">$397.000</span>
              </div>
            </div>
          </div>
        );
    }
}
export default FeaturedProperties;