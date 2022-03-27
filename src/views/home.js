import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import IndexS1 from "../components/index-s1";

class Home extends Component{
    render(){
        return(        
            <Container fluid className="index-s1 d-flex align-items-center minh-footer-adj">
                <IndexS1/>
            </Container>    
        );
    }
}

export default Home;