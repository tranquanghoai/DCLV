import React from 'react';

export default class CircularLoader extends React.Component {

    render() {
        const loaderSize = ['big', '', 'small'].indexOf(this.props.size) !== -1 ? this.props.size : '';
        return (
            <div className={loaderSize + ' preloader-wrapper active'}>
                <div className='spinner-layer spinner-blue'>
                    <div className='circle-clipper left'>
                        <div className='circle'/>
                    </div>
                    <div className='gap-patch'>
                        <div className='circle'/>
                    </div>
                    <div className='circle-clipper right'>
                        <div className='circle'/>
                    </div>
                </div>

                <div className='spinner-layer spinner-red'>
                    <div className='circle-clipper left'>
                        <div className='circle'/>
                    </div>
                    <div className='gap-patch'>
                        <div className='circle'/>
                    </div>
                    <div className='circle-clipper right'>
                        <div className='circle'/>
                    </div>
                </div>

                <div className='spinner-layer spinner-yellow'>
                    <div className='circle-clipper left'>
                        <div className='circle'/>
                    </div>
                    <div className='gap-patch'>
                        <div className='circle'/>
                    </div>
                    <div className='circle-clipper right'>
                        <div className='circle'/>
                    </div>
                </div>

                <div className='spinner-layer spinner-green'>
                    <div className='circle-clipper left'>
                        <div className='circle'/>
                    </div>
                    <div className='gap-patch'>
                        <div className='circle'/>
                    </div>
                    <div className='circle-clipper right'>
                        <div className='circle'/>
                    </div>
                </div>
            </div>
        );
    }
}