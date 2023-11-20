import { useState } from 'react'
import './UserSubTask.css'

import TaskPopUp from '../Components/TaskPopUp/TaskPopUp'; 
export default function UserSubTask() {
    const [openPopUp, setOpenPopUp] = useState(false);
    return (
        <div>
            <button onClick={() => setOpenPopUp(!openPopUp)}>openPopUp</button>
                {openPopUp && <TaskPopUp/>}
            
        </div>
    )
}