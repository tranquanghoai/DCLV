import React from 'react';


class LocationProperties extends React.Component {
    render() {

        return (
            <div className="widget location-widget">
            <div className="widget-header"><strong className="has-line">Location of Properties</strong></div>
            <div className="d-flex">
              <ul className="list-unstyled mb-0">
                <li><a href="#">Los Angeles</a></li>
                <li> <a href="#">San Antonio</a></li>
                <li> <a href="#">New Orleans</a></li>
                <li> <a href="#">Victor Harbor</a></li>
              </ul>
              <ul className="list-unstyled mb-0">
                <li><a href="#">Gold Cost</a></li>
                <li> <a href="#">New Orleans</a></li>
                <li> <a href="#">Murray Bridge</a></li>
                <li> <a href="#">South Wales</a></li>
              </ul>
            </div>
          </div>
        );
    }
}
export default LocationProperties;