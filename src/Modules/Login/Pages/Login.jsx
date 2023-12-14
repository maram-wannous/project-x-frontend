import { Form } from "react-bootstrap";
import { Frame } from "../../../assets/Frame";
import { Logo } from "../../../assets/Logo";
import loginImg from '../../../assets/login.png'
import './login.css'
import Loading from "../../../Routes/Loading";
import { useState } from "react";
import axios from "axios";


export default function Login() {
    const [loading, setLoading] = useState(false);
    const [error, setErr] = useState("");
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    function handleChange (e) {
        setForm({...form, [e.target.name] : e.target.value});
    }

    async function handleSubmite (e) {
        e.preventDefault();
        setLoading(true);
        try{
            const res = await axios.post('http://127.0.0.1:8000/api/Admin/login', form, {
                headers: {
                    Accept: 'application/json',
                },
            });
            setLoading(false);
            const token = res.data.authorisation.token;
            localStorage.setItem('bearer', token);
            window.location.pathname= '/dashboard';
        }catch (err) {
            setLoading(false);
            if (err.response.status === 401){
                setErr("wrong email or password");
            }else {
                setErr("Internal server error");
            }
        }
    }

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
            {loading && <Loading/>}
            <div className="container d-flex justify-content-center align-items-center mr-content">
                <div className="d-none d-lg-block w-50 h-100 p-3" data-aos="fade-right" data-aos-duration="1000">
                    <img src={loginImg} alt="" className="w-100 h-100 object-fit-contain animated"/>
                </div>
                <div className="w-lg-50 mr-login-form" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="text-start">Welcome back, Yash </h1>
                    <p className="text-start mb-4">Welcome back! Please enter your details.</p>
                    <Form onSubmit={handleSubmite}>
                        <Form.Group className="mb-3 mr-custom-form" controlId="formBasicEmail">
                            <Form.Control
                            type="email"
                            name="email" 
                            value={form.email} 
                            onChange={handleChange} 
                            required
                            placeholder="Enter email"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 mr-custom-form" controlId="formBasicPassword">
                            <Form.Control
                            name="password"
                            type="password"
                            value={form.password} 
                            onChange={handleChange} 
                            required
                            placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3 mr-check" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Terms & Conditions" required/>
                        </Form.Group>
                        <div className="d-grid mr-login-btn">
                            <button type="submit" size="lg">
                                Log in
                            </button>
                        </div>
                        {error !== "" && <span className="error">{error}</span>}
                    </Form>
                </div>
            </div>
           </div>
    );
}