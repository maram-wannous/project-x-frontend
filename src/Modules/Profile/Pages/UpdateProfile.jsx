
import './UpdateProfile.css';
import TotalWork from "../../../Components/TotalWork/TotalWork";
import ProfileInfo from "../../../Components/ProfileInfo/ProfileInfo";
import ProjectProfile from "../../../Components/ProjectProfile/ProjectProfile";
import ProfileForm from '../components/ProfileForm';
import WorkedWith from '../../../Components/WorkedWith/WorkedWith';

function UpdateProfile() { 

  return (
    <>
    <div className="container d-flex flex-wrap pt-4">
      <ProfileInfo/>
      <ProfileForm/>
      <ProjectProfile/>
    </div>
    <div className="container d-flex align-items-start justify-content-between flex-wrap pb-4 mr-updateprofile">
      <TotalWork/>
      <WorkedWith/>
    </div>
    </>
  );
}

export default UpdateProfile;



