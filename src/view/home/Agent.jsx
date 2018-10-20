import React from 'react';


class Agent extends React.Component{
    render(){
            var { agent } = this.props;
        return(
            <div className="col-lg-4">
            <div className="agent">
                <div className="image"><img src={agent.img} alt="Richard Wood" className="img-fluid" />
                    <ul className="contact-info list-unstyled mb-0">
                        <li><a href={agent.mail}><i className="icon-envelope-1" />{agent.mail}</a></li>
                        <li><a href="#"><i className="icon-smart-phone-2" />{agent.sdt}</a></li>
                    </ul>
                </div>
                <div className="info"><a href="agent-single.html" className="no-anchor-style">
                    <h3 className="h4 text-thin text-uppercase mb-1">{agent.name}</h3></a>
                    <p className="mb-0">{agent.role}</p>
                </div>
                <ul className="agent-social list-inline d-flex justify-content-between align-items-center">
                    <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-pinterest" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-instagram" /></a></li>
                </ul>
            </div>
        </div>
        );
    }
}
export default Agent;