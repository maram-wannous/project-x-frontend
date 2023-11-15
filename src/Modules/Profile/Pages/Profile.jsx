import WorkedWith from './../../../Components/WorkedWith/WorkedWith';
import TotalWork from './../../../Components/TotalWork/TotalWork';
import ProjectInfo from '../../../Components/ProfileInfo/ProfileInfo';
import ProjectProfile from '../../../Components/ProjectProfile/ProjectProfile'; 
import './Profile.css';
import { useState } from 'react';
export default function Profile() {
    const pageProfile = useState(true);
    return( 
        <div >
            <div className='si-profWith'>
             <WorkedWith />
             </div> 
             <div className='si-profTotal'> 
             <TotalWork /></div>
             <ProjectInfo pageProfile={pageProfile} />
             <ProjectProfile/> 
        </div>
    );
}