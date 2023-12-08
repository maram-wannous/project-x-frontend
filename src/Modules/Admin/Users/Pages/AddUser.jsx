/* eslint-disable no-unused-vars */
import './User.css';
import Profile from '../../../../assets/Foto.png';
import { useNavigate} from 'react-router-dom';
import { FaUpload } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';
import Loading from '../../../../Routes/Loading';


export default function AddUser() {
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [nationality, setNationality] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [designation, setDesignation] = useState("");
    const [department, setDepartment] = useState("");
    const [image, setImage] = useState(null);
    const [imgSrc, setImgSrc] = useState("")
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem('bearer');

    const handleUploadImage = (file) => {
        const url = URL.createObjectURL(file);
        setImage(file);
        setImgSrc(url);
      };

    async function HandleSubmite(e) {
        setLoading(true);
        e.preventDefault();
        try{
            const res = await axios.post('http://127.0.0.1:8000/api/users',{
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password,
                phone: phone,
                nationality: nationality,
                address: address,
                country: country,
                designation: designation,
                department: department,
                image: image,
            },{
                headers: {
                    AUTHORIZATION: `Bearer ${token}`,
                }
            });
            setLoading(false);
            console.log(res);
            window.location.pathname= '/dashboard/users';
        }catch(err){
            setLoading(false);
            console.log(err);
        }
    }


    return (
        <div className="RA-bgBlue">
            <h1 className="RA-HeaderStyle">Add User</h1>
            {loading && <Loading />}
            <form className="RA-bgWhite RA-MarginBox" onSubmit={HandleSubmite}>
                <div className="d-flex row">
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div
                            className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="fn" className="RA-Label">First name</label>
                            <input type="text" className="form-control RA-Field d-flex" id="fn"
                                    aria-describedby="emailHelp"
                                    value={first_name}
                                    onChange={(e) => setFirst_name(e.target.value)}
                                    required
                                   >
                            </input>
                        </div>
                        <div
                            className=" d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="exampleInputEmail1" className="RA-Label RA-fsLabel">Email</label>
                            <input type="email" className="form-control RA-Field" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" 
                                   value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                   required>
                            </input>
                        </div>
                        <div
                            className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="phone" className="RA-Label text-center">Phone No.</label>
                            <input type="number" className="form-control RA-Field" id="phone"
                                   aria-describedby="phone" 
                                   value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                   required>
                            </input>
                        </div>
                        <div
                            className=" d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="Country" className="RA-Label RA-fsLabel">Country</label>
                            <input type="text" className="form-control RA-Field" id="Country"
                                   aria-describedby="emailHelp" 
                                   value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                   required>
                            </input>
                        </div>

                        <div
                            className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="Designation" className="RA-Label RA-fsLabel">Designation</label>
                            <input type="text" className="form-control RA-Field" id="Designation"
                                   aria-describedby="emailHelp" 
                                   value={designation}
                                    onChange={(e) => setDesignation(e.target.value)}
                                   required>
                            </input>
                        </div>
                    </div>
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div
                            className=" d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="ln" className="RA-Label RA-fsLabel">Last Name</label>
                            <input type="text" className="form-control RA-Field" id="ln"
                                   aria-describedby="emailHelp" 
                                   value={last_name}
                                    onChange={(e) => setLast_name(e.target.value)}
                                   required>
                            </input>
                        </div>
                        <div
                            className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="password" className="RA-Label RA-fsLabel">Password</label>
                            <input type="password" className="form-control RA-Field" id="password"
                                   aria-describedby="emailHelp"
                                   minLength={6}
                                   value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                   required>
                            </input>
                        </div>
                        <div
                            className=" d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="Nationality" className="RA-Label RA-fsLabel">Nationality</label>
                            <input type="text" className="form-control RA-Field" id="Nationality"
                                   aria-describedby="emailHelp" 
                                   value={nationality}
                                    onChange={(e) => setNationality(e.target.value)}
                                   required>
                            </input>
                        </div>
                    
                        <div
                            className=" d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="Address" className="RA-Label RA-fsLabel">Address</label>
                            <input type="text" className="form-control RA-Field" id="Address"
                                   aria-describedby="emailHelp" 
                                   value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                   required>
                            </input>
                        </div>
                        <div
                            className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="Department" className="RA-Label RA-fsLabel">Department</label>
                            <input type="text" className="form-control RA-Field" id="Department"
                                   aria-describedby="emailHelp" 
                                   value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                   required>
                            </input>
                        </div>

                    </div>
                    <div className=" flex-column   col-lg-4 col-md-12  col-sm-12 d-flex justify-content-center mt-5">
                        <img src={Profile} alt="" className="RA-imgStyle mx-auto"></img>
                        <div className="w-100 d-flex justify-content-center  align-content-center mt-3">
                            <div className="file btn btn-lg btn-primary RA-div btn-height bg-transparent colorGray ">
                               <FaUpload className="colorGray"/> Upload
                                <input type="file" name="file" className="RA-input" 
                                onChange={(e) => handleUploadImage(e.target.files[0])}/>
                            </div>
                        </div>
                        <div className='w-100 d-flex justify-content-center  align-content-center mt-3'>
                        {image && <img src={imgSrc} alt="" width={150}/>}
                        </div>
                    </div>
                    <div className="d-flex py-3 align-items-center justify-content-sm-center justify-content-lg-end ">
                            <button className="btn mx-4 px-4 py-2 display-4 border-0">Add User</button>
                    </div>
                </div>
            </form>

        </div>
    );
}