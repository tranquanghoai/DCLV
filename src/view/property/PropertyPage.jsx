import React from 'react';


class PropertyPage extends React.Component{
    render(){
        
  return(
<section className="property-grid-sidebar bg-black-3">
  <div className="container">
    <h1 className="h2">Property Grid Sidebar</h1>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
        <li className="breadcrumb-item"><a href="property.html">Property</a></li>
        <li aria-current="page" className="breadcrumb-item active">Property Grid Sidebar</li>
      </ol>
    </nav>
    {/* Filters*/}
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
    <div className="row"> 
      {/* Property Listings*/}
      <div className="property-listing col-lg-8">
        <div className="row">
          <div className="col-lg-6">
            <div className="property-listing-item">
              <div className="image"><img src="img/property-listing-1.jpg" alt=" The Chalet Estate" className="img-fluid" />
                <div className="price">$4800/Mo</div>
              </div>
              <div className="info">
                <div className="badge badge-primary">For Rent</div><a href="property-single.html" className="no-anchor-style">
                  <h2 className="h3 text-thin"> The Chalet Estate</h2></a>
                <p className="address">KT89B Hampton Court, England, United Kingdom</p>
              </div>
              <div className="footer d-flex align-items-center justify-content-between">
                <div className="left">Area <span className="area">120 </span> sq/ft</div>
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
          <div className="col-lg-6">
            <div className="property-listing-item">
              <div className="image"><img src="img/property-listing-2.jpg" alt="Westbourne Terrace" className="img-fluid" />
                <div className="price">$650,000</div>
              </div>
              <div className="info">
                <div className="badge badge-danger">For Sale</div><a href="property-single.html" className="no-anchor-style">
                  <h2 className="h3 text-thin">Westbourne Terrace</h2></a>
                <p className="address">KT89B Hampton Court, England, United Kingdom</p>
              </div>
              <div className="footer d-flex align-items-center justify-content-between">
                <div className="left">Area <span className="area">120 </span> sq/ft</div>
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
          <div className="col-lg-6">
            <div className="property-listing-item">
              <div className="image"><img src="img/property-listing-3.jpg" alt="Sturruk Gordon" className="img-fluid" />
                <div className="price">$40,000</div>
              </div>
              <div className="info">
                <div className="badge badge-danger">For Sale</div>
                <div className="badge badge-warning">Hot Offer</div><a href="property-single.html" className="no-anchor-style">
                  <h2 className="h3 text-thin">Sturruk Gordon</h2></a>
                <p className="address">KT89B Hampton Court, England, United Kingdom</p>
              </div>
              <div className="footer d-flex align-items-center justify-content-between">
                <div className="left">Area <span className="area">120 </span> sq/ft</div>
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
          <div className="col-lg-6">
            <div className="property-listing-item">
              <div className="image"><img src="img/property-listing-4.jpg" alt=" Asset Northern Star" className="img-fluid" />
                <div className="price">$2700/Mo</div>
              </div>
              <div className="info">
                <div className="badge badge-primary">For Rent</div>
                <div className="badge badge-success">New</div><a href="property-single.html" className="no-anchor-style">
                  <h2 className="h3 text-thin"> Asset Northern Star</h2></a>
                <p className="address">KT89B Hampton Court, England, United Kingdom</p>
              </div>
              <div className="footer d-flex align-items-center justify-content-between">
                <div className="left">Area <span className="area">120 </span> sq/ft</div>
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
          <div className="col-lg-6">
            <div className="property-listing-item">
              <div className="image"><img src="img/property-listing-5.jpg" alt=" Prospect Princeton" className="img-fluid" />
                <div className="price">$3600/Mo</div>
              </div>
              <div className="info">
                <div className="badge badge-primary">For Rent</div>
                <div className="badge badge-warning">Hot Offer</div><a href="property-single.html" className="no-anchor-style">
                  <h2 className="h3 text-thin"> Prospect Princeton</h2></a>
                <p className="address">KT89B Hampton Court, England, United Kingdom</p>
              </div>
              <div className="footer d-flex align-items-center justify-content-between">
                <div className="left">Area <span className="area">120 </span> sq/ft</div>
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
          <div className="col-lg-6">
            <div className="property-listing-item">
              <div className="image"><img src="img/property-listing-1.jpg" alt="Valmark Orchard Square" className="img-fluid" />
                <div className="price">$177,000</div>
              </div>
              <div className="info">
                <div className="badge badge-danger">For Sale</div>
                <div className="badge badge-success">New</div><a href="property-single.html" className="no-anchor-style">
                  <h2 className="h3 text-thin">Valmark Orchard Square</h2></a>
                <p className="address">KT89B Hampton Court, England, United Kingdom</p>
              </div>
              <div className="footer d-flex align-items-center justify-content-between">
                <div className="left">Area <span className="area">120 </span> sq/ft</div>
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
          <div className="widget search-widget">
            <div className="widget-header"><strong className="has-line">Search for Properties</strong></div>
            <form className="sidebar-search">
              <div className="form-group">
                <input type="text" placeholder="Type your keyword..." className="form-control" />
              </div>
              <div className="form-group">
                <select name="location" title="location" className="selectpicker">
                  <option value="los-anglos">Los Angeles</option>
                  <option value="san-antonio">San Antonio</option>
                  <option value="new-orleans">New Orleans</option>
                  <option value="victor-harbor">Victor Harbor</option>
                  <option value="gold-cost">Gold Cost</option>
                  <option value="murray-bridge">Murray Bridge</option>
                  <option value="south-wales">South Wales</option>
                </select>
              </div>
              <div className="form-group">
                <select name="type" title="Property Type" className="selectpicker">
                  <option value="apartments">Apartment</option>
                  <option value="houses">Houses</option>
                  <option value="commercial">Commercial</option>
                  <option value="lots">Lots</option>
                </select>
              </div>
              <div className="form-group">
                <select name="status" title="Property Status" className="selectpicker">
                  <option value="sale">Sale</option>
                  <option value="rent">Rent</option>
                </select>
              </div>
              <div className="form-group">
                <select name="bedrooms" title="Bedrooms" className="selectpicker">
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                </select>
              </div>
              <div className="form-group">
                <select name="bathrooms" title="Bathrooms" className="selectpicker">
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </div>
              <div className="form-group text-center">
                <button type="submit" className="btn btn-gradient full-width">Search Property</button>
              </div>
            </form>
          </div>
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
        </div>
      </div>
    </div>
  </div>
</section>

        );
    }
}
export default PropertyPage;