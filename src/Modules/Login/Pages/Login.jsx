import { Form } from "react-bootstrap";
import { Frame } from "../../../assets/Frame";
import { Logo } from "../../../assets/Logo";
import loginImg from '../../../assets/login.png'
import './login.css'

export default function Login() {

    return(
           <div>
            <div className="container d-flex justify-content-between align-items-center mr-login-header">
                <div>
                    <Logo/>
                </div>
                <div>
                    <Frame/>
                    Asite Product System
                </div>
            </div>
            <div className="container d-flex justify-content-center align-items-center mr-content">
                <div className="d-none d-lg-block w-50 h-100 p-3" data-aos="fade-right" data-aos-duration="1000">
                    <img src={loginImg} alt="" className="w-100 h-100 object-fit-contain animated"/>
                </div>
                <div className="w-lg-50 mr-login-form" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="text-start">Welcome back, Yash </h1>
                    <p className="text-start mb-4">Welcome back! Please enter your details.</p>
                    <Form>
                        <Form.Group className="mb-3 mr-custom-form" controlId="formBasicEmail">
                            <Form.Control 
                            type="email"
                            required
                            placeholder="Enter email" 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 mr-custom-form" controlId="formBasicPassword">
                            <Form.Control 
                            type="password"
                            required
                            placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3 mr-check" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Terms & Conditions"/>
                        </Form.Group>
                        <div className="d-grid mr-login-btn">
                            <button type="submit" size="lg">
                                Log in
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
           </div>
    );
}