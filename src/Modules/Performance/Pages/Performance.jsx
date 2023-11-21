import './performance.css';

export default function Performance() {
    return (
        <div className="RA-bgBlue">
            <h1 className="RA-HeaderStyle">Projects / Create Project</h1>

            <div className="RA-bgWhite RA-MarginBox">
                <div className="d-flex row">
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
                            <div className="col-md-6 ">
                                <label htmlFor="ln" className="RA-Label RA-fsLabel ps-2">Start Date</label>
                                <input type="date" className="form-control  mt-3 ">
                                </input>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="ln" className="RA-Label RA-fsLabel ps-2">End Date</label>
                                <input type="date" className="form-control mt-3 ">
                                </input>
                            </div>
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
                <div className="w-50 mt-5 RA-border-table RA-margin-table">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">Team Lead</th>
                            <th scope="col">Last</th>
                            <th><input type="checkbox"/></th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td><input type="checkbox"/></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td><input type="checkbox"/></td>

                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry the Bird</td>
                            <td><input type="checkbox"/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
);
}