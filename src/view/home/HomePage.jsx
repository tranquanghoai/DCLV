import React from 'react';
import './../common/myCss/fontastic.css';
import './../common/vendor/swiper/css/swiper.css';
import './../common/myCss/gallery.css';
import './../common/myCss/style.default.css';
import './../common/myCss/custom.css';
import './../common/myJs/front.js';

import ListNewHouse from './ListNewHouse.jsx';
import Search from './Search.jsx';
import ApartmentReady from './ApartmentReady.jsx';
import ListArea from './ListArea.jsx';

class HomePage extends React.Component {
    render() {
  
      return (
        
          <div>
            <Search />
            <ListNewHouse />
            <ApartmentReady />
            <ListArea />
          </div>
          
      );
    }
  }
  export default HomePage;