import './Project.css';

export default function UpdateProject(){
    return (
        <div className="RA-bgBlue">
            <h1 className="RA-HeaderStyle">Projects / Create Project</h1>

            <div className="RA-bgWhite RA-MarginBox">
                <div className="d-flex row justify-content-center">
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div
                            className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="fn" className="RA-Label ps-2">Project Title</label>
                            <input type="email" className="form-control ms-2 mt-3 d-flex" id="fn"
                                   aria-describedby="emailHelp">
                            </input>
                        </div>
                    </div>
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div
                            className=" d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="ln" className="RA-Label RA-fsLabel ps-2"> Project Type</label>
                            <input type="text" className="form-control  mt-3 " id="ln"
                                   aria-describedby="emailHelp">
                            </input>
                        </div>
                    </div>
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div className="row">
                            <div className="col-md-6 d-flex flex-column align-items-lg-start align-items-center">
                                <label htmlFor="ln" className="RA-Label RA-fsLabel ps-2">Start Date</label>
                                <input type="date" className="form-control  mt-3 ">
                                </input>
                            </div>
                            <div className="col-md-6 d-flex flex-column align-items-lg-start align-items-center">
                                <label htmlFor="ln" className="RA-Label RA-fsLabel ps-2">End Date</label>
                                <input type="date" className="form-control mt-3 ">
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-3">
                        <div className="dropdown mx-4 col-md-6 col-sm-6 align-items-end justify-content-center d-flex">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                Status
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button className="dropdown-item" type="button">Action</button></li>
                                <li><button className="dropdown-item" type="button">Another action</button></li>
                                <li><button className="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                        </div>
                        <div className="dropdown col-md-6 col-sm-6 align-items-center d-flex">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                Priority
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button className="dropdown-item" type="button">Action</button></li>
                                <li><button className="dropdown-item" type="button">Another action</button></li>
                                <li><button className="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div
                        className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                        <label htmlFor="fn" className="RA-Label ps-2">Project Description</label>
                        <input type="email" className="form-control d-flex w-90 ms-2 h-6 RA-borderRadius" id="fn"/>

                    </div>
                </div>

                <h6 className="mt-5 mx-2 RA-margin-Right w-50">Project Roles</h6>
                <div className="accordion accordion-flush w-50 RA-border-table mx-2 my-2" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header RA-bgWhite" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Team Lead
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <table className="table table-hover">
                                    <tbody>
                                    <tr>
                                        <th scope="row">Yash</th>
                                        <td>Team Lead</td>
                                        <td><input type="checkbox"/></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Yash</th>
                                        <td>Team Lead</td>
                                        <td><input type="checkbox"/></td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Yash</th>
                                        <td>Team Lead</td>
                                        <td><input type="checkbox"/></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="w-50 RA-border-table RA-margin-table RA-margin-Right">*/}
                {/*    */}
                {/*</div>*/}
                <div className="d-flex justify-content-end">
                    <button className="btn mx-2 px-1 py-1 fs-5">Create</button>
                    <button className="btn colorOrange RA-bgLightBlue fs-5 px-1 py-1">Delete</button>
                </div>
            </div>
        </div>
    )
}