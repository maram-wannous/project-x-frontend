import WorkedWith from './../../../Components/WorkedWith/WorkedWith';
import TotalWork from './../../../Components/TotalWork/TotalWork';
import ProjectInfo from '../../../Components/ProfileInfo/ProfileInfo';
import ProjectProfile from '../../../Components/ProjectProfile/ProjectProfile'; 
import './Profile.css';
import { useState } from 'react';
export default function Profile() {
    const pageProfile = useState(true);
    return( 
        <div className="container d-flex flex-wrap py-4">
            <ProjectInfo pageProfile={pageProfile} />
            <WorkedWith />
            <div>
                <ProjectProfile/>
                <TotalWork />
            </div>
        </div>
    );
}