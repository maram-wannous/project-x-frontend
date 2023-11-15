import { useState } from 'react'
import './UserSubTask.css'
import TaskPopUp from '../Components/TaskPopUp/TaskPopUp';
export default function UserSubTask() {
    const [openPopUp, setOpenPopUp] = useState(false);
    return (
        <div>
            <div>SubTask</div>
            <button onClick={() => setOpenPopUp(!openPopUp)}>click to show popup</button>
            {openPopUp && <TaskPopUp/>}
            
        </div>
    )
}