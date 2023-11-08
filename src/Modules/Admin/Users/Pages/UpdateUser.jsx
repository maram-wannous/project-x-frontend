import { Link } from 'react-router-dom';
import Profile from '../../../../assets/Foto.png';
import './User.css';
export default function UpdateUser(){
    return (
        <div className="RA-bgBlue">
            <h1 className="RA-HeaderStyle">Update User</h1>
            {/* <div className="d-flex align-items-center justify-content-between">
                <h1 className="RA-HeaderStyle">Update User</h1>
                <Link to={'dashboard/users'}><button type="button" className="btn mx-4 px-2 py-2 display-4 border-0">Update User</button></Link>
            </div> */}
            <div className="RA-bgWhite RA-MarginBox">
                <div className="d-flex row">
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                        <label htmlFor="fn" className="RA-Label">First name</label>
                            <input type="email" className="form-control RA-Field d-flex" id="fn"
                                   aria-describedby="emailHelp">
                            </input>
                        </div>
                        <div className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="phone" className="RA-Label">Phone No.</label>
                            <input type="number" className="form-control RA-Field" id="phone"
                                   aria-describedby="phone">
                            </input>
                        </div>
                        <div className=" d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="exampleInputEmail1" className="RA-Label RA-fsLabel">Email</label>
                            <input type="email" className="form-control RA-Field" id="exampleInputEmail1"
                                   aria-describedby="emailHelp">
                            </input>
                        </div>

                        <div className=" d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="password" className="RA-Label RA-fsLabel">Password</label>
                            <input type="password" className="form-control RA-Field" id="password"
                                   aria-describedby="emailHelp">
                            </input>
                        </div>
                        <div className="row RA-mb">
                            <div className="col-lg-6">
                                    <div className="form-group d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                                    <label htmlFor="inputState" className="RA-Label">Designation</label>
                                    <select id="inputState" className="form-control RA-FieldDev">
                                        <option selected>UI Intern</option>
                                        <option>...</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                                    <label htmlFor="inputState" className="RA-Label">Department</label>
                                    <select id="inputState" className="form-control RA-FieldDev">
                                        <option selected>PDT</option>
                                        <option>...</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div className=" d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="ln" className="RA-Label RA-fsLabel">Last Name</label>
                            <input type="text" className="form-control RA-Field" id="ln"
                                   aria-describedby="emailHelp">
                            </input>
                        </div>
                        <div className=" d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="Nationality" className="RA-Label RA-fsLabel">Nationality</label>
                            <input type="email" className="form-control RA-Field" id="Nationality"
                                   aria-describedby="emailHelp">
                            </input>
                        </div>
                       {/* <div className=" d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="exampleInputEmail1" className="RA-Label RA-fsLabel">Created
                            Date</label>
                            <input type="date" className="form-control RA-Field" id="exampleInputEmail1"
                                   aria-describedby="emailHelp">
                            </input>
                        </div>*/}
                        <div className=" d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="exampleInputEmail1" className="RA-Label RA-fsLabel">Country</label>
                            <input type="text" className="form-control RA-Field" id="exampleInputEmail1"
                                   aria-describedby="emailHelp">
                            </input>
                        </div>
                        <div className=" d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="exampleInputEmail1" className="RA-Label RA-fsLabel">Address</label>
                            <input type="text" className="form-control RA-Field" id="exampleInputEmail1"
                                   aria-describedby="emailHelp">
                            </input>
                        </div>
                        {/*<div className="form-group d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="inputState" className="RA-Label">Created By</label>
                            <select id="inputState" className="form-control RA-Field">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>*/}

                    </div>
                    <div className="           col-lg-4 col-md-12  col-sm-12 d-flex justify-content-center mt-5">
                        <img src={Profile} alt="" className="RA-imgStyle mx-auto"></img>
                    </div>
                    <div className="d-flex align-items-center justify-content-end">
                        <Link to={'dashboard/users'}><button type="button" className="btn mx-4 px-2 py-2 display-4 border-0">Update User</button></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}