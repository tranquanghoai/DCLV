import React from 'react';


class FiltersProperties extends React.Component {
    
    render() {
        return (
            <div className="filter d-flex justify-content-between align-items-center flex-wrap">
            <div className="sort d-flex align-items-center"><strong>Sort</strong>
              <select id="propertyFilter" name="property_filter" className="selectpicker">
                <option value="low_to_high">Price (Low to Heigh)</option>
                <option value="high_to_low">Price (Heigh to Low)</option>
              </select>
            </div>
            <div className="view d-flex align-items-center"><strong>View</strong>
              <ul className="list-inline mb-0">
                <li className="list-inline-item"><a href="#" className="active"><i className="fa fa-th-large" /></a></li>
                <li className="list-inline-item"><a href="property-list.html"><i className="fa fa-th-list" /></a></li>
              </ul>
            </div>
          </div>
        );
    }
}
export default FiltersProperties;