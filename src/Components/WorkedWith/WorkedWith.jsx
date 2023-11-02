import { Col, Container , Row } from "react-bootstrap";
import './WorkedWith.css';
export default function WorkedWith(props){
    return (
        <Container className="container">
            <h6>Inicio &gt; Profile</h6>
            <h3>UI Developer</h3>
            <p className="prg">Lorem ipsum is the best sentence in thhe world of dummy text</p>
            <div className="d-xl-flex flex-row">
            <h6 className="fw-bold ms-3 mb-4">worked with</h6>
            <button className="btn mb-4"  text="Warning">view all</button>
            </div>
            <Row>
                <Col>
                <img src={props.img} class="img"  width="85" height="85"/>
                <p>{props.title}</p>
                </Col>
                <Col>
                <img src={props.img} class="img"  width="85" height="85"/>
                <p>{props.title}</p>
                </Col>
                <Col>
                <img src={props.img} class="img"  width="85" height="85"/>
                <p>{props.title}</p>
                </Col>
                <Col>
                <img src={props.img} class="img"  width="85" height="85"/>
                <p>{props.title}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <img src={props.img} class="img"  width="85" height="85"/>
                <p>{props.title}</p>
                </Col>
                <Col>
                <img src={props.img} class="img"  width="85" height="85"/>
                <p>{props.title}</p>
                </Col>
                <Col>
                <img src={props.img} class="img"  width="85" height="85"/>
                <p>{props.title}</p>
                </Col>
                <Col>
                <img src={props.img} class="img"  width="85" height="85"/>
                <p>{props.title}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <img src={props.img} class="img"  width="85" height="85"/>
                <p>{props.title}</p>
                </Col>
                <Col>
                <img src={props.img} class="img"  width="85" height="85"/>
                <p>{props.title}</p>
                </Col>
                <Col>
                <img src={props.img} class="img"  width="85" height="85"/>
                <p>{props.title}</p>
                </Col>
                <Col>
                <img src={props.img} class="img"  width="85" height="85"/>
                <p>{props.title}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <img src={props.img} class="img"  width="85" height="85"/>
                <p>{props.title}</p>
                </Col>
                <Col>
                <img src={props.img} class="img"  width="85" height="85"/>
                <p>{props.title}</p>
                </Col>
                <Col>
                <img src={props.img} class="img"  width="85" height="85"/>
                <p>{props.title}</p>
                </Col>
                <Col>
                <img src={props.img} class="img"  width="85" height="85"/>
                <p>{props.title}</p>
                </Col>
            </Row>
        </Container>
    )
}

