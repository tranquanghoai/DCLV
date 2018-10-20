import React from 'react';


class Property extends React.Component {
    
    render() {
        var {property} = this.props;
        console.log(property);
        return (
            <div className="col-lg-6">
            <div className="property-listing-item">
              <div className="image"><img src={property.img} alt=" The Chalet Estate" className="img-fluid" />
                <div className="price">${property.price}/Mo</div>
              </div>
              <div className="info">
                <div className="badge badge-primary">{property.status}</div><a href="property-single.html" className="no-anchor-style">
                  <h2 className="h3 text-thin">{property.name}</h2></a>
                <p className="address">{property.address}</p>
              </div>
              <div className="footer d-flex align-items-center justify-content-between">
                <div className="left">Area <span className="area">{property.area} </span> sq/ft</div>
                <div className="right">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item"><i className="fa fa-bed" />4</li>
                    <li className="list-inline-item"><i className="fa fa-bath" />2</li>
                    <li className="list-inline-item"><i className="fa fa-car" />1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default Property;