import './AdminSubTask.css'
import { Link } from "react-router-dom";
import { CardTask } from './../../../../Components/CardTask/CardTask';

export default function AdminSubTask() {
    return (
        <div>
            <div className="d-flex justify-content-between sa_divTitle">
                <p className="header-style">Task / Make an Automatic Payment System that enable the design</p>
                <Link to={'/dashboard/tasks/assigntask'}><button className="btn">Assign Sub task</button></Link>
            </div>
            <div className="sa_bodyBox sa_divTitle">
                <CardTask />
                <div className="d-flex align-items-center flex-column mt-4">
                <div className='sa_backSubTask'>
                    <CardTask />
                </div>
                <div className='sa_backSubTask'>
                    <CardTask />
                </div>
                </div>
            </div>
        </div>
    )
}