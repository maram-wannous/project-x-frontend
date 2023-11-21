import {RiDeleteBin5Fill} from 'react-icons/ri'
import {BiPencil} from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default function ViewUsers() {
    return (
        <div className="RA-bgBlue">
            <div className="d-flex align-items-center justify-content-between">
                <h1 className="RA-HeaderStyle">View Users</h1>
                <Link to={'/dashboard/users/add'}><button type="button" className="btn mx-4 px-2 py-2 display-4 border-0">Add Users</button></Link>
            </div>
            <div className="RA-bgWhite RA-MarginBox">
                <div className="table-responsive" style={{maxHeight: "300px"}}>
                    <table className="table colorGray fa-2x">
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
                                <div className="d-flex align-items-center gap-3">
                                    <Link to={'/dashboard/users/update'}><BiPencil className="colorGreen RA-table-icon"/></Link>
                                    <RiDeleteBin5Fill className="colorRed RA-table-icon"/>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}