import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Card from "../../node_modules/react-bootstrap/Card";
import Form from "../../node_modules/react-bootstrap/Form";
import Button from "../../node_modules/react-bootstrap/Button";

class ShopS1 extends Component{
    render(){
        return(    
            <Container fluid className="d-flex minh-100vh align-items-start py-5">
                <Row className="mx-0 w-100 mt-5">
                    <Col xs={12} sm={5} md={4} lg={3} className="pt-5">
                        <Card className="opacity-8">
                            <Card.Header className="bg-light">
                                <Card.Title className="text-secondary float-start">
                                    Filter
                                </Card.Title>   
                                <Button variant="outline-secondary" size="sm" className="float-end rounded" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#filters">
                                    +
                                </Button>                         
                            </Card.Header>
                            <Card.Body className="collapse show" id="filters">
                                <Form className="small">
                                    <fieldset className="mb-3">
                                        <legend>
                                            <Card.Subtitle>
                                                Categories
                                            </Card.Subtitle>
                                        </legend>                                    
                                        <Form.Check className="ms-2"
                                            type="checkbox"
                                            label="Men"/>                        
                                        <Form.Check className="ms-2"
                                            type="checkbox"
                                            label="Women"/>                  
                                        <Form.Check className="ms-2"
                                            type="checkbox"
                                            label="Kids"/>                                                    
                                    </fieldset>
                                    <fieldset className="mb-5 w-100">
                                        <legend>
                                            <Card.Subtitle>
                                                Clothing
                                            </Card.Subtitle>
                                        </legend>                   
                                        <Form.Check className="ms-2"
                                            type="checkbox"
                                            label="Activewear"/>      
                                        <Form.Check className="ms-2"
                                            type="checkbox"
                                            label="Blazers"/>     
                                        <Form.Check className="ms-2"
                                            type="checkbox"
                                            label="Causal shirts"/>
                                        <Form.Check className="ms-2"
                                            type="checkbox"
                                            label="Coats"/>
                                        <Form.Check className="ms-2"
                                            type="checkbox"
                                            label="Denim"/>
                                        <Form.Check className="ms-2"
                                            type="checkbox"
                                            label="Jackets"/>
                                        <Form.Check className="ms-2"
                                            type="checkbox"
                                            label="Shorts"/>
                                        <Form.Check className="ms-2"
                                            type="checkbox"
                                            label="Sweats"/>
                                        <Form.Check className="ms-2"
                                            type="checkbox"
                                            label="T-Shirts"/>
                                    </fieldset>
                                    <div className="w-100 text-end border-top pt-2">
                                        <Button type="reset" variant="secondary" size="sm" className="rounded-pill">
                                            Clear
                                        </Button>
                                        <Button type="submit" variant="secondary" size="sm" className="rounded-pill">
                                            Filter
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={7} md={8} lg={9}>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ShopS1;