import T from '../common/js/common';
import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../common/Loading.jsx';

const homePage = Loadable({ loading: Loading, loader: () => import('../home/HomePage.jsx') });

export default class MessagePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: 'Xin vui lòng chờ trong giây lát!' };
    }

    componentDidMount() {
        if (this.props.isTask) {
            $.post(T.url(window.location.pathname)).then(res => {
                this.setState({ message: res.message });
            }).catch(error => {
                console.error('GET: ' + window.location.pathname + '. ' + error);
            });
        }
    }

    render() {
        const message = this.props.isTask ? this.state.message : this.props.message;
        return (
            // <div className='central-box'>
            //     <h3 dangerouslySetInnerHTML={{ __html: message }} />
            //     Nhấp vào <Link to='/'>đây</Link> để trở về trang chủ.
            //         <Switch>
            //         <Route path='/' component={homePage} exact={true} />
            //     </Switch>
            // </div>
            <section className="bg-black-3 error-page">
  <div className="container text-center">
    <div className="error-page-holder d-flex align-items-center justify-content-center">
      <div className="error-page-inner">
        <h1>404 </h1>
        <p className="template-text">The page you were looking for is not here any more.</p>
        <Link to="/" className="btn btn-gradient">Return Home</Link>
        <img src="img/error-404.svg" alt="..." className="img-fluid mt-5" />
      </div>
    </div>
  </div>
</section>

        );
    }
}