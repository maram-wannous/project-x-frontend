import { Link } from 'react-router-dom'
import './UserSubTask.css'
export default function UserTasks() {
    return (
        <div>
            <div>User Tasks</div>
            <Link to={'/dashboard/usertasks/Kanban'}>Kanban View</Link>
            <div><Link to={'/dashboard/usertasks/subtask'}>open SubTask</Link></div>
            
        </div>
    )
}