export default function AssignSubTask() {
    return(
        <div className="RA-bgBlue">
            <h1 className="RA-HeaderStyle RA-Width-fit">SubTask / Create SubTask</h1>

            <div className="RA-bgWhite RA-MarginBox">
                <div className="d-flex row justify-content-center">
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div
                            className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="fn" className="RA-Label ps-2">SubTask Title</label>
                            <input type="email" className="form-control ms-2 mt-3 d-flex" id="fn"
                                   aria-describedby="emailHelp" required>
                            </input>
                        </div>
                    </div>
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div
                            className=" d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="ln" className="RA-Label RA-fsLabel ps-2"> SubTask Status</label>
                            <input type="text" className="form-control  mt-3 " id="ln"
                                   aria-describedby="emailHelp" required>
                            </input>
                        </div>
                    </div>
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div className="row">
                            <div className="col-md-6 d-flex flex-column align-items-lg-start align-items-center">
                                <label htmlFor="ln" className="RA-Label RA-fsLabel ps-2">Start Date</label>
                                <input type="date" className="form-control  mt-3 " required>
                                </input>
                            </div>
                            <div className="col-md-6 d-flex flex-column align-items-lg-start align-items-center">
                                <label htmlFor="ln" className="RA-Label RA-fsLabel ps-2">End Date</label>
                                <input type="date" className="form-control mt-3 " required>
                                </input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div
                        className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                        <label htmlFor="fn" className="RA-Label ps-2">SubTask Description</label>
                        <input type="email" className="form-control d-flex w-100 ms-2 h-6 RA-borderRadius" id="fn" required/>

                    </div>
                </div>

<div className="d-flex">
                <div className="d-flex row mt-3 ms-3">
                    <label className="ms-1">Assign to</label>
                    <div className="dropdown col-md-6 col-sm-6 align-items-center d-flex">
                        <button className=" btn-secondary dropdown-toggle RA-border-drop px-4 mt-2" type="button" id="dropdownMenu2"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            Riham Aji
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li>
                                <button className="dropdown-item" type="button">Action</button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">Another action</button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">Something else here</button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="d-flex row mt-3 ms-3">
                    <label className="ms-1">Priority</label>
                    <div className="dropdown col-md-6 col-sm-6 align-items-center d-flex">
                        <button className=" btn-secondary dropdown-toggle  RA-border-drop px-4 mt-2" type="button" id="dropdownMenu2"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            Priority
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li>
                                <button className="dropdown-item" type="button">High</button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">Another action</button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">Something else here</button>
                            </li>
                        </ul>
                    </div>
                </div>
    <div className="d-flex row mt-3 ms-3">
        <label className="ms-1">Task Assigning</label>
        <div className="dropdown col-md-6 col-sm-6 align-items-center d-flex">
            <button className=" btn-secondary dropdown-toggle  RA-border-drop px-4 mt-2" type="button" id="dropdownMenu2"
                    data-bs-toggle="dropdown" aria-expanded="false">
                Priority
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li>
                    <button className="dropdown-item" type="button">Pending</button>
                </li>
                <li>
                    <button className="dropdown-item" type="button">Another</button>
                </li>
                <li>
                    <button className="dropdown-item" type="button">Something else here</button>
                </li>
            </ul>
        </div>
    </div>
</div>

                {   <div className="row justify-content-end mt-5">
                        <div className="col-lg-3  ">
                        <div className="d-flex justify-content-end align-items-end">

                            <button className="btn mx-2 px-1 py-1 fs-5 w-50">Create</button>
                            <button className="btn colorOrange RA-bgLightBlue w-50 fs-5 px-1 py-1">Delete</button>
                        </div>
                        </div>
                    </div>}
             {/*   <div className="row align-items-end">

                    <div className="row justify-content-between">
                        <div className="col-12 mb-3">
                            <button className="btn  w-100 colorBgGreen RA-attch RA-bgLightGreen RA-colorGreen">Add
                                Attachment
                            </button>
                        </div>
                        <div className="col-6">
                            <button className="btn w-100">Create</button>
                        </div>
                        <div className="col-6">
                            <button className="btn colorOrange RA-bgLightBlue w-100">Delete</button>
                        </div>
                    </div>
                </div>*/}

            </div>
        </div>
    )
}