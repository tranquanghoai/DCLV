import React from 'react';


class ListArea extends React.Component {
    render() {
        return (
            <section className="listings-home pt-0 bg-black-3">
                <div className="container">
                    <header className="text-center">
                        <h2>Browse Listings in <span className="text-primary">these areas</span></h2>
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <p className="template-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</p>
                            </div>
                        </div>
                    </header>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="listing-home"><img src="img/listing-bg-1.jpg" alt="..." /><a href="#" className="text no-anchor-style">
                                <h3>San Francisco</h3>
                                <p>On the other hand, we denounce</p></a>
                                <div className="ribbon text-center"><strong className="d-block">12</strong><small>Listings</small></div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="listing-home"><img src="img/listing-bg-2.jpg" alt="..." /><a href="#" className="text no-anchor-style">
                                <h3>Hunters Point</h3>
                                <p>On the other hand, we denounce</p></a>
                                <div className="ribbon text-center"><strong className="d-block">7</strong><small>Listings</small></div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="listing-home"><img src="img/listing-bg-3.jpg" alt="..." /><a href="#" className="text no-anchor-style">
                                <h3>Marina</h3>
                                <p>On the other hand, we denounce</p></a>
                                <div className="ribbon text-center"><strong className="d-block">9</strong><small>Listings</small></div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="listing-home mb-0"><img src="img/listing-bg-4.jpg" alt="..." /><a href="#" className="text no-anchor-style">
                                <h3>Trestel Glen</h3>
                                <p>On the other hand, we denounce</p></a>
                                <div className="ribbon text-center"><strong className="d-block">4</strong><small>Listings</small></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}
export default ListArea;