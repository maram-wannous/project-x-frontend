/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Project.css';
import { Form } from 'react-bootstrap';
import Loading from '../../../../Routes/Loading';
export default function AddProject() {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [start_date, setStart_date] = useState('');
    const [end_date, setEnd_date] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [users, setUsers] = useState([]);
    const [image, setImage] = useState(null);
    // const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('bearer');

 // get project id
 const id = Number(window.location.pathname.replace("/adminprojects/update/", ""));

    const members = [
        {
            id: 1,
            name: 'maram',
        },
        {
            id: 2,
            name: 'rima',
        },
        {
            id: 3,
            name: 'riham',
        },
        {
            id: 4,
            name: 'sarah',
        },
        {
            id: 5,
            name: 'nermem',
        },
    ];



    async function HandleSubmite(e) {
        setLoading(true);
        e.preventDefault();
        try {
            const res = await axios.put(`http://127.0.0.1:8000/api/projects/${id}`, {
                title: title,
                type: type,
                start_date: start_date,
                end_date: end_date,
                description: description,
                status: status,
                users: users,
                image: image,
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Accept: 'application/json',
                    AUTHORIZATION: `Bearer ${token}`,
                }
            });
            console.log(res);
            setLoading(false);
            window.location.pathname = '/dashboard/adminprojects/projects';
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    }
    // useEffect(() => {
    //     axios.get('http://127.0.0.1:8000/api/getUsers', {
    //         headers: {
    //             Accept: 'application/json',
    //             AUTHORIZATION: `Bearer ${token}`,
    //         },
    //     })
    //     .then((data) => setMembers(data.data))
    //     .catch((err) => console.log(err));
    // }, []);

    function checkboxHandler(e){
		let isSelected = e.target.checked;
		let value = parseInt(e.target.value);

		if( isSelected ){
			setUsers( [...users, value ] )
		}else{
			setUsers((prevData)=>{
				return prevData.filter((id)=>{
					return id!==value
				})
			})
		}
	}

    //handeling delete project
    async function handleDeleteProject() {
        try{
            const res = await axios.delete(`http://127.0.0.1:8000/api/projects/${id}`,{
                headers: {
                    Accept: 'application/json',
                    AUTHORIZATION: `Bearer ${token}`,
                    },
            });
            window.location.pathname = '/dashboard/adminprojects/projects';
        }catch(err){
            console.log(err);
        }
        
    }



    return (
        <div className="RA-bgBlue">
            <h1 className="RA-HeaderStyle px-3">Projects / Update Project</h1>
            {loading && <Loading />}
            <form className="RA-bgWhite RA-MarginBox">
                <div className="d-flex row justify-content-center">
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div
                            className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="fn" className="RA-Label ps-2">Project Title</label>
                            <input type="text" className="form-control ms-2 mt-3 d-flex" id="fn"
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
                            <input type='text' className="form-control  mt-3 " id="ln"
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
                    <Form.Group className="col-md-12 d-flex flex-column justify-content-start align-items-start ms-2" controlId="status">
                        <Form.Label className="RA-Label RA-fsLabel ps-2">Status</Form.Label>
                        <Form.Select style={{width: '200px'}}
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}>
                            <option disabled value="">Select State</option>
                            <option value="OnTrack">OnTrack</option>
                            <option value="OffTrack">OffTrack</option>
                            <option value="Pending">Pending</option>
                            <option value="Complete">Completed</option>
                        </Form.Select>
                    </Form.Group>
                </div>
                <div className="row">
                    <div
                        className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                        <label htmlFor="fn" className="RA-Label ps-2">Project Description</label>
                        <input type="text" className="form-control d-flex w-90 ms-2 h-6 RA-borderRadius" id="fn"
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                    </div>
                </div>
                
                <div className="accordion accordion-flush w-50 RA-border-table mx-2 mt-3" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header RA-bgWhite" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Team Members
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <table className="table table-hover">
                                    <tbody>
                                    {
                                        members.map((item, index) => (
                                        <tr key={index}>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.name}</td>
                                            <td><input type="checkbox" 
                                                    checked={ users.includes( item.id ) } 
                                                    value={item.id} 
                                                    onChange={checkboxHandler} />
                                            </td>
                                        </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn mx-2 px-1 py-1 fs-5"  onClick={HandleSubmite}>Update</button>
                    <button className="btn colorOrange RA-bgLightBlue fs-5 px-1 py-1" 
                    onClick={handleDeleteProject}
                    >Delete</button>
                </div>
            </form>
        </div>
    )


}