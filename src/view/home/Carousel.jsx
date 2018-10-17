import React from 'react';

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='carouselExampleIndicators' className='carousel slide' data-ride='carousel'>
                <ol className='carousel-indicators'>
                    <li data-target='#carouselExampleIndicators' data-slide-to='0' className='active'></li>
                    <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
                    <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
                    <li data-target='#carouselExampleIndicators' data-slide-to='3'></li>
                    <li data-target='#carouselExampleIndicators' data-slide-to='4'></li>
                </ol>
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <img className='d-block w-100' src='/img/h1.png' alt='' />
                    </div>
                    <div className='carousel-item'>
                        <img className='d-block w-100' src='/img/h2.png' alt='' />
                    </div>
                    <div className='carousel-item'>
                        <img className='d-block w-100' src='/img/h3.png' alt='' />
                    </div>
                    <div className='carousel-item'>
                        <img className='d-block w-100' src='/img/h4.png' alt='' />
                    </div>
                    <div className='carousel-item'>
                        <img className='d-block w-100' src='/img/h5.png' alt='' />
                    </div>
                </div>
                <a className='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='sr-only'>Previous</span>
                </a>
                <a className='carousel-control-next' href='#carouselExampleIndicators' role='button' data-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='sr-only'>Next</span>
                </a>
            </div>
        );
    }
}