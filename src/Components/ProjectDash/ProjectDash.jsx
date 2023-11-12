import ProjDash from '../../assets/Projects.png';
import './ProjectDash.css';

export default function ProjectDash() {
    return (
        /*  <div className="RA-bgWhite RA-MarginBoxProj">*/

        <div className="RA-bgBlue">
            <div className="RA-bgWhite RA-MarginBoxProj ">
                <h1 className="RA-HeaderStyle">Projects</h1>
                <img src={ProjDash} alt="" className="WidthFitContent w-100 "/>
            </div>
        </div>
    )
}