import React from 'react';
import './../common/myCss/fontastic.css';
import './../common/vendor/swiper/css/swiper.css';
import './../common/myCss/gallery.css';
import './../common/myCss/style.default.css';
import './../common/myCss/custom.css';
import './../common/myJs/front.js';
import {Link} from 'react-router-dom';

import SearchProperty from './SearchProperties.jsx';
import FeaturedProperties from './FeaturedProperties.jsx';
import LocationProperties from './LocationProperties.jsx';
import Property from './Property.jsx';
import listPropert from './ListProperties.js';
import FiltersProperties from './FiltersProperties.jsx';
class PropertyPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      property : [
        {
          img: '',
          price: 1,
          status: '',
          name: '',
          address: '',
          area: ''
        }
      ]
    }
  }
  componentDidMount(){
    console.log('conponetDidMount');
    this.setState({
      property: listPropert
    })
  }
  render() {
    
    var { property } = this.state;
    var propertyElement = property.map((property,index)=>{
      return <Property key={index} property={property}/>
    });
    console.log(property);
    return (
      <section className="property-grid-sidebar bg-black-3">
        <div className="container">
          <h1 className="h2">Property Grid Sidebar</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/property">Property</Link></li>
              <li aria-current="page" className="breadcrumb-item active">Property Grid Sidebar</li>
            </ol>
          </nav>

          {/* Filters*/}
          <FiltersProperties />
          
          <div className="row">
            {/* Property Listings*/}
            <div className="property-listing col-lg-8">
              <div className="row">

                {/* List property */}
                {propertyElement}

              </div>
              <div className="property-listing-footer">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="left mt-5">
                    <p className="mb-0">Showing  <span className="text-primary">1 </span> of  <span className="text-primary">6 </span></p>
                  </div>
                  <div className="right mt-5">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination m-0">
                        <li className="page-item"><a href="#" aria-label="Previous" className="page-link"><span aria-hidden="true">«</span><span className="sr-only">Previous</span></a></li>
                        <li className="page-item"><a href="#" className="page-link active">1</a></li>
                        <li className="page-item"><a href="#" className="page-link">2</a></li>
                        <li className="page-item"><a href="#" className="page-link">3</a></li>
                        <li className="page-item"><a href="#" aria-label="Next" className="page-link"><span aria-hidden="true">»</span><span className="sr-only">Next</span></a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="property-listing-sidebar">

                <SearchProperty />

                <FeaturedProperties />

                <LocationProperties />
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}
export default PropertyPage;