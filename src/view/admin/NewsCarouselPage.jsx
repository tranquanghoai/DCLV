import React from 'react';

export default class NewsCarouselPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <main className='app-content'>
                <div className='app-title'>
                    <div>
                        <h1><i className='fa fa-dashboard' />News: Carousel</h1>
                        <p></p>
                    </div>
                    <ul className='app-breadcrumb breadcrumb'>
                        <li className='breadcrumb-item'>
                            <i className='fa fa-home fa-lg' />
                        </li>
                        <li className='breadcrumb-item'><a href='#'>News: Carousel</a></li>
                    </ul>
                </div>
                <div className='row'>
                    News: Carousel
                </div>
            </main>
        );
    }
}