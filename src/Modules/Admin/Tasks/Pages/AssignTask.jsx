import { Form } from 'react-bootstrap';
import './AdminTasks.css';
import { useState } from 'react';
import axios from 'axios';
import Loading from '../../../../Routes/Loading';

export default function AssignTask() {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [start_date, setStart_date] = useState('');
    const [end_date, setEnd_date] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [priority, setPriority] = useState('');
    const [user_id, setUser_id] = useState([0]);

    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('bearer');


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
            const res = await axios.post('http://127.0.0.1:8000/api/store_task/1', {
                title: title,
                type: type,
                start_date: start_date,
                end_date: end_date,
                description: description,
                status: status,
                priority: priority,
                user_id: user_id,
                project_id: [1]
            }, {
                headers: {
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

    return (
        <div className="RA-bgBlue">
            <h1 className="RA-HeaderStyle RA-Width-fit">Tasks / Create Tasks</h1>
            {loading && <Loading />}
            <form className="RA-bgWhite RA-MarginBox">
                <div className="d-flex row justify-content-center">
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div
                            className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="fn" className="RA-Label ps-2">SubTask Title</label>
                            <input type="text" className="form-control ms-2 mt-3 d-flex" id="fn"
                                   aria-describedby="emailHelp" 
                                   value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                   required>
                            </input>
                        </div>
                    </div>
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div
                            className=" d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="ln" className="RA-Label RA-fsLabel ps-2"> SubTask Type</label>
                            <input type="text" className="form-control  mt-3 " id="ln"
                                   aria-describedby="emailHelp" 
                                   value={type}
                                    onChange={(e) => setType(e.target.value)}
                                   required>
                            </input>
                        </div>
                    </div>
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div className="row">
                            <div className="col-md-6 d-flex flex-column align-items-lg-start align-items-center">
                                <label htmlFor="ln" className="RA-Label RA-fsLabel ps-2">Start Date</label>
                                <input type="date" className="form-control  mt-3 " 
                                value={start_date}
                                onChange={(e) => setStart_date(e.target.value)}
                                required>
                                </input>
                            </div>
                            <div className="col-md-6 d-flex flex-column align-items-lg-start align-items-center">
                                <label htmlFor="ln" className="RA-Label RA-fsLabel ps-2">End Date</label>
                                <input type="date" className="form-control mt-3 " 
                                value={end_date}
                                onChange={(e) => setEnd_date(e.target.value)}
                                required>
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-start flex-wrap gap-2'>
                    <Form.Group className="col-md-4 d-flex flex-column justify-content-start align-items-start ms-2" controlId="status">
                        <Form.Label className="RA-Label RA-fsLabel ps-2">Status</Form.Label>
                        <Form.Select style={{width: '200px'}}
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}>
                            <option disabled value="">Select State</option>
                            <option value="OnProgress">OnProgress</option>
                            <option value="OnHold">OnHold</option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                            <option value="Canceled">Canceled</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="col-md-4 d-flex flex-column justify-content-start align-items-start ms-2" controlId="status">
                        <Form.Label className="RA-Label RA-fsLabel ps-2">Priority</Form.Label>
                        <Form.Select style={{width: '200px'}}
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}>
                            <option disabled value="">Select State</option>
                            <option value="high">high</option>
                            <option value="low">low</option>
                        </Form.Select>
                    </Form.Group>
                    </div>
                    
                </div>
                <div className="row">
                    <div
                        className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                        <label htmlFor="fn" className="RA-Label ps-2">SubTask Description</label>
                        <input type="email" className="form-control d-flex w-100 ms-2 h-6 RA-borderRadius" id="fn" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required/>

                    </div>
                </div>
                <Form.Group className="col-md-4 d-flex flex-column justify-content-start align-items-start ms-2 mb-5" controlId="status">
                        <Form.Label className="RA-Label RA-fsLabel ps-2">Select an User</Form.Label>
                        <Form.Select

                            value={user_id}
                            onChange={(e) => setUser_id(e.target.value)}>
                                <option disabled value="">click to select</option>
                            {
                                members.map((item, index) => (
                                    <option key={index} value={item.id}>{item.name}</option>
                                )
                            )}
                            
                        </Form.Select>
                    </Form.Group>
              
                <div className="d-flex justify-content-end">
                    <button className="btn mx-2 px-1 py-1 fs-5"  onClick={HandleSubmite}>Create</button>
                </div>

                </form>
            </div>
    )
}