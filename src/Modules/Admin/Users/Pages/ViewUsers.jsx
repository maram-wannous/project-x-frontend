import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import UpdateUser from "./UpdateUser.jsx";

export default function ViewUsers() {
    return (
        <div className="RA-bgBlue">
            <h1 className="RA-HeaderStyle w-100">View Users</h1>
            <div className="RA-bgWhite RA-MarginBox">
                <div className="table-responsive" style={{maxHeight: "300px"}}>
                    <table className="table RA-display-7 table  colorGray fa-2x">
                        <thead>
                        <tr className="py-5 align-middle RA-header">
                            <th scope="col" className="colorDarkGreen">First</th>
                            <th scope="col" className="colorDarkGreen">Last</th>
                            <th scope="col" className="colorDarkGreen">Email</th>
                            <th scope="col" className="colorDarkGreen">Phone</th>
                            <th scope="col" className="colorDarkGreen">Department</th>
                            <th scope="col" className="colorDarkGreen">Address</th>
                            <th scope="col" className="colorDarkGreen">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="py-5 align-middle fw-normal">
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <div className="">
                                    <FontAwesomeIcon icon={faPen} className="colorGreen px-3" onClick={UpdateUser}/>
                                    <FontAwesomeIcon icon={faTrashCan} className="colorRed"/>
                                </div>
                            </td>
                        </tr>
                        <tr className="py-4 align-middle">
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <div className="">
                                    <FontAwesomeIcon icon={faPen} className="colorGreen px-3"/>
                                    <FontAwesomeIcon icon={faTrashCan} className="colorRed"/>
                                </div>
                            </td>
                        </tr>
                        <tr className="py-4 align-middle">
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <div className="">
                                    <FontAwesomeIcon icon={faPen} className="colorGreen px-3"/>
                                    <FontAwesomeIcon icon={faTrashCan} className="colorRed"/>
                                </div>
                            </td>
                        </tr>
                        <tr className="py-4 align-middle">
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <div className="">
                                    <FontAwesomeIcon icon={faPen} className="colorGreen px-3"/>
                                    <FontAwesomeIcon icon={faTrashCan} className="colorRed"/>
                                </div>
                            </td>
                        </tr>
                        <tr className="py-4 align-middle">
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <div className="">
                                    <FontAwesomeIcon icon={faPen} className="colorGreen px-3"/>
                                    <FontAwesomeIcon icon={faTrashCan} className="colorRed"/>
                                </div>
                            </td>
                        </tr>
                        <tr className="py-4 align-middle">
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <div className="">
                                    <FontAwesomeIcon icon={faPen} className="colorGreen px-3"/>
                                    <FontAwesomeIcon icon={faTrashCan} className="colorRed"/>
                                </div>
                            </td>
                        </tr>
                        <tr className="py-4 align-middle">
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <div>
                                    <FontAwesomeIcon icon={faPen} className="colorGreen px-3"/>
                                    <FontAwesomeIcon icon={faTrashCan} className="colorRed"/>
                                </div>
                            </td>
                        </tr>
                        <tr className="py-4 align-middle">
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <div className="">
                                    <FontAwesomeIcon icon={faPen} className="colorGreen px-3"/>
                                    <FontAwesomeIcon icon={faTrashCan} className="colorRed"/>
                                </div>
                            </td>
                        </tr>
                        <tr className="py-4 align-middle">
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <div className="">
                                    <FontAwesomeIcon icon={faPen} className="colorGreen px-3"/>
                                    <FontAwesomeIcon icon={faTrashCan} className="colorRed"/>
                                </div>
                            </td>
                        </tr>
                        <tr className="py-4 align-middle">
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <div className="">
                                    <FontAwesomeIcon icon={faPen} className="colorGreen px-3"/>
                                    <FontAwesomeIcon icon={faTrashCan} className="colorRed"/>
                                </div>
                            </td>
                        </tr>
                        <tr className="py-4 align-middle">
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <div className="">
                                    <FontAwesomeIcon icon={faPen} className="colorGreen px-3"/>
                                    <FontAwesomeIcon icon={faTrashCan} className="colorRed"/>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-primary mx-4 my-4 px-2 py-2 display-4 colorBgGreen fontSize2Rem border-0">Add Users</button>
                </div>
            </div>
        </div>
    )
}