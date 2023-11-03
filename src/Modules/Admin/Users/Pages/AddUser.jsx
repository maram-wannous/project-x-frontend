import './User.css';
import Profile from '../../../../assets/Foto.png';

export default function AddUser() {
    return (
        <div className="RA-pageWidth">
            <h1 className="RA-HeaderStyle">Add User</h1>
            <div className="RA-bgBlue RA-addWidthHeight ">
                <div className=" RA-bgWhite ">
                    <div className="d-flex row RA-addWidthHeight ">
                        <div className="form-group col-lg-4 col-md-12 col-sm-12">
                            <label htmlFor="exampleInputEmail1" className="RA-Label">First name</label>
                            <input type="email" className="form-control RA-Field" id="exampleInputEmail1"
                                   aria-describedby="emailHelp">
                            </input>
                            <label htmlFor="exampleInputEmail1" className="RA-Label">Phone No.</label>
                            <input type="email" className="form-control RA-Field" id="exampleInputEmail1"
                                   aria-describedby="emailHelp">
                            </input>
                            <div className="row RA-mb">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="inputState" className="RA-Label">Designation</label>
                                        <select id="inputState" className="form-control RA-FieldDev">
                                            <option selected>UI Intern</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="inputState" className="RA-Label">Department</label>
                                        <select id="inputState" className="form-control RA-FieldDev">
                                            <option selected>PDT</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-lg-4 col-md-12 col-sm-12">
                            <div><label htmlFor="exampleInputEmail1" className="RA-Label RA-fsLabel">Last Name</label>
                                <input type="email" className="form-control RA-Field" id="exampleInputEmail1"
                                       aria-describedby="emailHelp">
                                </input>
                            </div>

                            <div><label htmlFor="exampleInputEmail1" className="RA-Label RA-fsLabel">Created
                                Date</label>
                                <input type="date" className="form-control RA-Field" id="exampleInputEmail1"
                                       aria-describedby="emailHelp">
                                </input>
                            </div>

                            <div className="form-group ">
                                <label htmlFor="inputState" className="RA-Label">Created By</label>
                                <select id="inputState" className="form-control RA-Field">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center mt-5">
                            <img src={Profile} alt="" className="RA-imgStyle mx-auto"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}