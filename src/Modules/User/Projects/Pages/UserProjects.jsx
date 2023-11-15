import { Link } from "react-router-dom";

export default function UserProjects() {
    return(
        <div>
            <div>UserProjects</div>
            <Link to={'/dashboard/userprojects/details'}><button>show project details</button></Link>
        </div>
    )
}