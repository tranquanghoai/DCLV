import React from 'react';
import DashboardIcon from './DashboardIcon.jsx';

export default class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {
            var data = {
                labels: ['January', 'February', 'March', 'April', 'May'],
                datasets: [{
                    label: 'My First dataset',
                    fillColor: 'rgba(220,220,220,0.2)',
                    strokeColor: 'rgba(220,220,220,1)',
                    pointColor: 'rgba(220,220,220,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220,220,220,1)',
                    data: [65, 59, 80, 81, 56]
                }, {
                    label: 'My Second dataset',
                    fillColor: 'rgba(151,187,205,0.2)',
                    strokeColor: 'rgba(151,187,205,1)',
                    pointColor: 'rgba(151,187,205,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(151,187,205,1)',
                    data: [28, 48, 40, 19, 86]
                }]
            };
            var pdata = [{
                value: 300,
                color: '#46BFBD',
                highlight: '#5AD3D1',
                label: 'Complete'
            },
            {
                value: 50,
                color: '#F7464A',
                highlight: '#FF5A5E',
                label: 'In-Progress'
            }
            ]

            var ctxl = $('#lineChartDemo').get(0).getContext('2d');
            var lineChart = new Chart(ctxl).Line(data);

            var ctxp = $('#pieChartDemo').get(0).getContext('2d');
            var pieChart = new Chart(ctxp).Pie(pdata);
        }, 500);
    }

    render() {
        return (
            <main className='app-content'>
                <div className='app-title'>
                    <div>
                        <h1><i className='fa fa-dashboard' /> Dashboard</h1>
                        <p>Trung tâm Hỗ trợ sinh viên và việc làm</p>
                    </div>
                    <ul className='app-breadcrumb breadcrumb'>
                        <li className='breadcrumb-item'>
                            <i className='fa fa-home fa-lg' />
                        </li>
                        <li className='breadcrumb-item'><a href='#'>Dashboard</a></li>
                    </ul>
                </div>
                <div className='row'>
                    <div className='col-md-6 col-lg-3'>
                        <DashboardIcon type='primary' icon='fa-users' title='User' value={5} />
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <DashboardIcon type='info' icon='fa-file' title='News' value={25} />
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <DashboardIcon type='danger' icon='fa-star' title='Event' value={500} />
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <DashboardIcon type='warning' icon='fa-eye' title='View' value={10} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='tile'>
                            <h3 className='tile-title'>Chart</h3>
                            <div className='embed-responsive embed-responsive-16by9'>
                                <canvas className='embed-responsive-item' id='lineChartDemo' />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='tile'>
                            <h3 className='tile-title'>Pie</h3>
                            <div className='embed-responsive embed-responsive-16by9'>
                                <canvas className='embed-responsive-item' id='pieChartDemo' />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}