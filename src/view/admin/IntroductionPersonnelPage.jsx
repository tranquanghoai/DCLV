import React from 'react';
import { Link } from 'react-router-dom';

export default class IntroductionPersonnelPage extends React.Component {
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
                        <h1><i className='fa fa-user' /> Nhân sự</h1>
                        <p></p>
                    </div>
                    <ul className='app-breadcrumb breadcrumb'>
                        <li className='breadcrumb-item'>
                            <Link to='/admin'><i className='fa fa-home fa-lg' /></Link>
                        </li>
                        <li className='breadcrumb-item'><a href='#'>Nhân sự</a></li>
                    </ul>
                </div>
                <div className='row'>
                    Introduction: Personnel
                </div>
            </main>
        );
    }
}