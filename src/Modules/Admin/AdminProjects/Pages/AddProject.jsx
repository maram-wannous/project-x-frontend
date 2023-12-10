import { useEffect, useState } from 'react';
import axios from 'axios';
import './Project.css';
export default function AddProject() {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [start_date, setStart_date] = useState('');
    const [end_date, setEnd_date] = useState('');
    const [description, setDescription] = useState('');
    // const [status, setStatus] = useState('');
    // const [image, setImage] = useState('');
    // const [team, setTeam] = useState([]);
    const [users, setUsers] = useState([]);
    const token = localStorage.getItem('bearer');

    async function HandleSubmite(e) {
        setLoading(true);
        e.preventDefault();
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/users', {
                title: title,
                type: type,
                start_date: start_date,
                end_date: end_date,
                description: description,
            }, {
                headers: {
                    Accept: 'application/json',
                    AUTHORIZATION: `Bearer ${token}`,
                }
            });
            setLoading(false);
            window.location.pathname = '/dashboard/adminprojects';
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    }
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getUsers', {
            headers: {
                Accept: 'application/json',
                AUTHORIZATION: `Bearer ${token}`,
            },
        })
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className="RA-bgBlue">
            <h1 className="RA-HeaderStyle">Projects / Create Project</h1>

            <form className="RA-bgWhite RA-MarginBox">
                <div className="d-flex row justify-content-center">
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div
                            className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="fn" className="RA-Label ps-2">Project Title</label>
                            <input type="email" className="form-control ms-2 mt-3 d-flex" id="fn"
                                aria-describedby="emailHelp"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            >
                            </input>
                        </div>
                    </div>
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div
                            className=" d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="ln" className="RA-Label RA-fsLabel ps-2"> Project Type</label>
                            <input type="text" className="form-control  mt-3 " id="ln"
                                aria-describedby="emailHelp"
                                required
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                            </input>
                        </div>
                    </div>
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div className="row">
                            <div className="col-md-6 d-flex flex-column align-items-lg-start align-items-center bg-white colorBlack">
                                <label htmlFor="ln" className="RA-Label RA-fsLabel ps-2">Start Date</label>
                                <input type="date" className="form-control  mt-3 "
                                    required
                                    value={start_date}
                                    onChange={(e) => setStart_date(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className="col-md-6 d-flex flex-column align-items-lg-start align-items-center">
                                <label htmlFor="ln" className="RA-Label RA-fsLabel ps-2">End Date</label>
                                <input type="date" className="form-control mt-3 "
                                    required
                                    value={end_date}
                                    onChange={(e) => setEnd_date(e.target.value)}
                                >
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-3">
                        <div className="dropdown align-items-start justify-content-center d-flex mx-2">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                Status
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
                        <input type="email" className="form-control d-flex w-90 ms-2 h-6 RA-borderRadius" id="fn"
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

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
                                            <td><input type="checkbox" /></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Yash</th>
                                            <td>Team Lead</td>
                                            <td><input type="checkbox" /></td>

                                        </tr>
                                        <tr>
                                            <th scope="row">Yash</th>
                                            <td>Team Lead</td>
                                            <td><input type="checkbox" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn mx-2 px-1 py-1 fs-5">Create</button>
                    <button className="btn colorOrange RA-bgLightBlue fs-5 px-1 py-1">Delete</button>
                </div>
            </form>
        </div>
    )


}