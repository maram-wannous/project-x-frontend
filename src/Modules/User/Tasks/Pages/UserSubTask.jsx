import { useState } from 'react'
import './UserSubTask.css'
import TaskPopUp from '../Components/TaskPopUp/TaskPopUp';
import { CardTask } from './../../../../Components/CardTask/CardTask';

export default function UserSubTask() {
    const [openPopUp, setOpenPopUp] = useState(false);
    return (
        <div>
            <p className="header-style">Task / Subtasks</p>
            <button onClick={() => setOpenPopUp(!openPopUp)}>openPopUp</button>
                {openPopUp && <TaskPopUp/>}
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