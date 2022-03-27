import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class EventS1 extends Component{
    render(){
        return(    
            <Container fluid className="event-s1 d-flex minh-25vh align-items-center py-5 pt-5">
                <Row className="mx-0 w-100 mt-5">
                    <Col xs={{span:12,order:1}} md={{span:5,order:2}} className="minh-25vh"></Col>
                    <Col xs={{span:12,order:2}} md={{span:5,order:1,offset:2}} className="minh-50vh d-flex align-items-center">
                        <div className="w-100 text-center text-md-start">
                            <h2 className="dispaly-6 fw-bold text-info text-shadow">
                                Unde omnis iste
                            </h2>
                            <p className="text-dark lead">
                                Natus error sit voluptatem accusantium doloremque laudantium, 
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
                                et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default EventS1;