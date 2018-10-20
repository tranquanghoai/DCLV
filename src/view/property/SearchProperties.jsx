import React from 'react';


class SearchProperty extends React.Component {
    render() {

        return (
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
        );
    }
}
export default SearchProperty;