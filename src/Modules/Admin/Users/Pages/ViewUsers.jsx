/* eslint-disable react-hooks/exhaustive-deps */
import {RiDeleteBin5Fill} from 'react-icons/ri'
import {BiPencil} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ViewUsers() {
    const [users, setUsers] = useState([]);
    const [noUsers, setNoUsers] = useState(false);
    const token = localStorage.getItem('bearer');

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/users', {
            headers: {
                Accept: 'application/json',
                AUTHORIZATION: `Bearer ${token}`,
                },
        })
        .then((data)=> {setUsers(data.data)})
        .then(()=> setNoUsers(true))
        .catch((err)=> console.log(err));
    },[]);

    //handeling delete
    // async function handleDeleteUser(id) {
        
    // }

    const usersShow = users.map((item, key) => {
        <tr key={key} className="py-5 align-middle fw-normal">
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.department}</td>
            <td>{item.address}</td>
            <td>
                <div className="d-flex align-items-center gap-3">
                    <Link to={`/dashboard/users/${item.id}`}><BiPencil className="colorGreen RA-table-icon"/></Link>
                    <RiDeleteBin5Fill className="colorRed RA-table-icon"
                        // onClick={() => handleDeleteUser(item.id)}
                    />
                </div>
            </td>
        </tr>
        })


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
                            {users.length === 0 ? 
                            (<tr>
                                <td colSpan={12}className="text-center">Loading...</td>
                            </tr>)
                            : users.length === 0 && noUsers ? (
                            <tr>
                                <td colSpan={12}className="text-center">No Users Found</td>
                            </tr>
                            )
                            : (usersShow)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}