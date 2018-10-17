import T from '../common/js/common';
import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../redux/user.jsx'
import Carousel from './Carousel.jsx';

class StudentPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <Carousel />
                Student: to be completed
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});
const mapActionsToProps = {
    loginUser: loginUser
};
export default connect(mapStateToProps, mapActionsToProps)(StudentPage);