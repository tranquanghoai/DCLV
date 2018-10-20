import React from 'react';


class Search extends React.Component{
    render(){
        return(
          <section className="search-property bg-black-4">
  <div className="container">
    <form action="#">
      <div className="row">
        <div className="form-group col-xl-7 col-lg-6">
          <input type="text" name="keyword_search" placeholder="Enter address e.g. street, city and state or zip" className="form-control" />
        </div>
        <div className="form-group col-lg-2">
          <div className="btn-group bootstrap-select"><button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" role="button" data-id="searchActions" title="Sale"><span className="filter-option pull-left">Sale</span>&nbsp;<span className="bs-caret"><span className="caret" /></span></button><div className="dropdown-menu open" role="combobox"><ul className="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index={0} className="selected"><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span className="text">Sale</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={1}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Rent</span><span className="glyphicon glyphicon-ok check-mark" /></a></li></ul></div><select id="searchActions" name="search_actions" className="selectpicker" tabIndex={-98}>
              <option value="sale">Sale</option>
              <option value="rent">Rent</option>
            </select></div>
        </div>
        <div className="form-group col-xl-1 col-lg-2"><a href="#" className="more-filters btn btn-gradient full-width"><i className="fa fa-sliders" /></a></div>
        <div className="form-group col-lg-2">
          <button type="submit" className="submit btn btn-gradient full-width">Search</button>
        </div>
      </div>
      <div className="row all-options d-none">
        <div className="form-group col-lg-4">
          <input type="text" name="min_price" placeholder="Min Price [USD]" className="form-control" />
        </div>
        <div className="form-group col-lg-4">
          <input type="text" name="max_price" placeholder="Max Price [USD]" className="form-control" />
        </div>
        <div className="form-group col-lg-4">
          <div className="btn-group bootstrap-select"><button type="button" className="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="Types" title="Property Type"><span className="filter-option pull-left">Property Type</span>&nbsp;<span className="bs-caret"><span className="caret" /></span></button><div className="dropdown-menu open" role="combobox"><ul className="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index={1}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Apartments</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={2}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Houses</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={3}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Commercial</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={4}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Lots</span><span className="glyphicon glyphicon-ok check-mark" /></a></li></ul></div><select id="Types" name="types" title="Property Type" className="selectpicker" tabIndex={-98}><option className="bs-title-option" value>Property Type</option>
              <option value="apartments">Apartments</option>
              <option value="houses">Houses</option>
              <option value="commercial">Commercial</option>
              <option value="lots">Lots</option>
            </select></div>
        </div>
        <div className="form-group col-lg-4">
          <input type="text" name="min_area_range" placeholder="Min area range [sq m]" className="form-control" />
        </div>
        <div className="form-group col-lg-4">
          <input type="text" name="max_area-range" placeholder="Max area range [sq m]" className="form-control" />
        </div>
        <div className="form-group col-lg-4">
          <div className="btn-group bootstrap-select"><button type="button" className="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" title="location"><span className="filter-option pull-left">location</span>&nbsp;<span className="bs-caret"><span className="caret" /></span></button><div className="dropdown-menu open" role="combobox"><ul className="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index={1}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Los Angeles</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={2}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">San Antonio</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={3}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">New Orleans</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={4}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Victor Harbor</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={5}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Gold Cost</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={6}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Murray Bridge</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={7}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">South Wales</span><span className="glyphicon glyphicon-ok check-mark" /></a></li></ul></div><select name="location" title="location" className="selectpicker" tabIndex={-98}><option className="bs-title-option" value>location</option>
              <option value="los-anglos">Los Angeles</option>
              <option value="san-antonio">San Antonio</option>
              <option value="new-orleans">New Orleans</option>
              <option value="victor-harbor">Victor Harbor</option>
              <option value="gold-cost">Gold Cost</option>
              <option value="murray-bridge">Murray Bridge</option>
              <option value="south-wales">South Wales</option>
            </select></div>
        </div>
        <div className="form group col-lg-12">
          <label htmlFor="air_conditioning" className="label-template-checkbox">Air Conditioning
            <input type="checkbox" name="air_conditioning" id="air_conditioning" />
          </label>
          <label htmlFor="alarm" className="label-template-checkbox">Alarm
            <input type="checkbox" name="alarm" id="alarm" />
          </label>
          <label htmlFor="central_heating" className="label-template-checkbox">Central Heating
            <input type="checkbox" name="central_heating" id="central_heating" />
          </label>
          <label htmlFor="gym" className="label-template-checkbox">Gym
            <input type="checkbox" name="gym" id="gym" />
          </label>
          <label htmlFor="internet" className="label-template-checkbox">Internet
            <input type="checkbox" name="internet" id="internet" />
          </label>
          <label htmlFor="laundry_room" className="label-template-checkbox">Laundry Room
            <input type="checkbox" name="laundry_room" id="laundry_room" />
          </label>
          <label htmlFor="swimming_pool" className="label-template-checkbox">Swimming Pool
            <input type="checkbox" name="swimming_pool" id="swimming_pool" />
          </label>
        </div>
      </div>
    </form>
  </div>
</section>




        );
    }
}
export default Search;