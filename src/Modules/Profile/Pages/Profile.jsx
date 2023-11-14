import WorkedWith from './../../../Components/WorkedWith/WorkedWith';
import TotalWork from './../../../Components/TotalWork/TotalWork';
import ProjectInfo from '../../../Components/ProfileInfo/ProfileInfo';
import ProjectProfile from '../../../Components/ProjectProfile/ProjectProfile'; 
import './Profile.css';
export default function Profile() {
    return( 
        <div >
            <div className='si-profWith'>
             <WorkedWith />
             </div> 
             <div className='si-profTotal'> 
             <TotalWork /></div>
             <ProjectInfo/>
             <ProjectProfile/> 
        </div>
    );
}