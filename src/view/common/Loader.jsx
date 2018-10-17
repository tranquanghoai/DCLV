import T from '../common/js/common';
import React from 'react';
import CircularLoader from './CircularLoader.jsx';

const loaderStyle = {
    display: 'none',
    zIndex: 999,
    position: 'absolute',
    padding: '12px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
};

export default class Loader extends React.Component {
    constructor(props) {
        super(props);

        this.loader = React.createRef();
        T.loader = {
            show: (elements) => {
                if (elements) {
                    elements = Array.isArray(elements) ? elements : [elements];
                    elements.forEach(element => element.style.display = 'none');
                }
                this.loader.current.style.display = 'block';
            },
            hide: (elements, display) => {
                if (elements) {
                    display = display ? display : 'block';
                    elements = Array.isArray(elements) ? elements : [elements];
                    elements.forEach(element => {
                        if (element) element.style.display = display
                    });
                }
                this.loader.current.style.display = 'none';
            }
        };
    }

    render() {
        return (
            <div style={loaderStyle} ref={this.loader}>
                <CircularLoader/>
            </div>
        );
    }
}