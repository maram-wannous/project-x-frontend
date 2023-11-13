import { Col, Container , Row } from "react-bootstrap";
import './WorkedWith.css';
import pic from './../../assets/happy.png';
export default function WorkedWith(){
    return (
        <Container className="si-container2">
            <h6>Inicio &gt; Profile</h6>
            <h3>UI Developer</h3>
            <p className="si-prg">Lorem ipsum is the best sentence in thhe world of dummy text</p>
            <div className="d-xl-flex flex-row">
            <h6 className="fw-bold ms-3 mb-4">worked with</h6>
            <button className="btn mb-4"  text="Warning">view all</button>
            </div>
            <Row>
                <Col>
                <img src={pic} className="img"  width="80" height="80"/>
                <p>title value</p>
                </Col>
                <Col>
                <img src={pic} className="img"  width="80" height="80"/>
                <p>title value</p>
                </Col>
                <Col>
                <img src={pic} className="img"  width="80" height="80"/>
                <p>title value</p>
                </Col>
                <Col className="si-col">
                <img src={pic} className="img"  width="80" height="80"/>
                <p>title value</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <img src={pic} className="img"  width="80" height="80"/>
                <p>title value</p>
                </Col>
                <Col>
                <img src={pic} className="img"  width="80" height="80"/>
                <p>title value</p>
                </Col>
                <Col>
                <img src={pic} className="img"  width="80" height="80"/>
                <p>title value</p>
                </Col>
                <Col className="si-col">
                <img src={pic} className="img"  width="80" height="80"/>
                <p>title value</p>
                </Col>
            </Row>
            <Row className="si-col">
                <Col>
                <img src={pic} className="img"  width="80" height="80"/>
                <p>title value</p>
                </Col>
                <Col>
                <img src={pic} className="img"  width="80" height="80"/>
                <p>title value</p>
                </Col>
                <Col>
                <img src={pic} className="img"  width="80" height="80"/>
                <p>title value</p>
                </Col>
                <Col>
                <img src={pic} className="img"  width="80" height="80"/>
                <p>title value</p>
                </Col>
            </Row>
            <Row className="si-col">
                <Col>
                <img src={pic} className="img"  width="80" height="80"/>
                <p>title value</p>
                </Col>
                <Col>
                <img src={pic} className="img"  width="80" height="80"/>
                <p>title value</p>
                </Col>
                <Col>
                <img src={pic} className="img"  width="80" height="80"/>
                <p>title value</p>
                </Col>
                <Col>
                <img src={pic} className="img"  width="80" height="80"/>
                <p>title value</p>
                </Col>
            </Row>
        </Container>
    )
}



 