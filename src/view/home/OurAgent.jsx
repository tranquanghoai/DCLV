import React from 'react';
import Agent from './Agent.jsx';


class OurAgent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            agent: [
                {
                    img: 'img/agent-1.jpg',
                    name: 'Richard Wood',
                    role: 'Buying agent',
                    mail: 'Richard@Example.com',
                    sdt: '(305) 555-4555'
                },
                {
                    img: 'img/agent-2.jpg',
                    name: 'Richard Wood',
                    role: 'Buying agent',
                    mail: 'Richard@Example.com',
                    sdt: '01672781029'
                },
                {
                    img: 'img/agent-1.jpg',
                    name: 'Richard Wood',
                    role: 'Buying agent',
                    mail: 'Richard@Example.com',
                    sdt: '(305) 555-4555'
                },
                {
                    img: 'img/agent-2.jpg',
                    name: 'Richard Wood',
                    role: 'Buying agent',
                    mail: 'Richard@Example.com',
                    sdt: '01672781029'
                },
                {
                    img: 'img/agent-1.jpg',
                    name: 'Richard Wood',
                    role: 'Buying agent',
                    mail: 'Richard@Example.com',
                    sdt: '(305) 555-4555'
                },
                {
                    img: 'img/agent-2.jpg',
                    name: 'Richard Wood',
                    role: 'Buying agent',
                    mail: 'Richard@Example.com',
                    sdt: '01672781029'
                }
            ]
        }
    }
    render() {
        var { agent } = this.state;
        console.log(agent);
        var agent = agent.map((agent,index)=>{
            return <Agent index={index} agent={agent}/>
        });
        return (
            <section className="agents-listing bg-black-2">
                <div className="container">
                    <div className="row">
                        
                        { agent }

                        
                    </div>
                </div>
                {/* <nav aria-label="Page navigation example" className="d-flex justify-content-center mt-5">
                    <ul className="pagination m-0">
                        <li className="page-item"><a href="#" aria-label="Previous" className="page-link"><span aria-hidden="true">«</span><span className="sr-only">Previous</span></a></li>
                        <li className="page-item"><a href="#" className="page-link active">1</a></li>
                        <li className="page-item"><a href="#" className="page-link">2</a></li>
                        <li className="page-item"><a href="#" className="page-link">3</a></li>
                        <li className="page-item"><a href="#" aria-label="Next" className="page-link"><span aria-hidden="true">»</span><span className="sr-only">Next</span></a></li>
                    </ul>
                </nav> */}
            </section>


        );
    }
}
export default OurAgent;